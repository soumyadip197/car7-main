module.exports = {

"[project]/lib/helpers.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatCurrency": (()=>formatCurrency),
    "serializeCarData": (()=>serializeCarData)
});
const formatCurrency = (amount)=>{
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(amount);
};
const serializeCarData = (car, wishlisted = false)=>{
    return {
        ...car,
        price: car.price ? parseFloat(car.price.toString()) : 0,
        createdAt: car.createdAt?.toISOString(),
        updatedAt: car.updatedAt?.toISOString(),
        wishlisted: wishlisted
    };
};
}}),
"[project]/actions/car-listing.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"003b4417bea7217c72ccbae7aeb067968059ac43fa":"getSavedCars","003c38c786f479816960b13d9cc1cc38ce1a4ff0c6":"getCarFilters","402f3dfb46d3c945246504f34a5ea6ce51b33cf530":"getCars","409e5ad48eb997a98fca6799042658673603470dcb":"toggleSavedCar","409ff24b5a226a48a885dc2ed4d5fdae8e230b35b8":"getCarById"} */ __turbopack_esm__({
    "getCarById": (()=>getCarById),
    "getCarFilters": (()=>getCarFilters),
    "getCars": (()=>getCars),
    "getSavedCars": (()=>getSavedCars),
    "toggleSavedCar": (()=>toggleSavedCar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/helpers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/prisma.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getCarFilters() {
    try {
        // Get unique makes
        const makes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.findMany({
            where: {
                status: "AVAILABLE"
            },
            select: {
                make: true
            },
            distinct: [
                "make"
            ],
            orderBy: {
                make: "asc"
            }
        });
        // Get unique body types
        const bodyTypes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.findMany({
            where: {
                status: "AVAILABLE"
            },
            select: {
                bodyType: true
            },
            distinct: [
                "bodyType"
            ],
            orderBy: {
                bodyType: "asc"
            }
        });
        // Get unique fuel types
        const fuelTypes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.findMany({
            where: {
                status: "AVAILABLE"
            },
            select: {
                fuelType: true
            },
            distinct: [
                "fuelType"
            ],
            orderBy: {
                fuelType: "asc"
            }
        });
        // Get unique transmissions
        const transmissions = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.findMany({
            where: {
                status: "AVAILABLE"
            },
            select: {
                transmission: true
            },
            distinct: [
                "transmission"
            ],
            orderBy: {
                transmission: "asc"
            }
        });
        // Get min and max prices using Prisma aggregations
        const priceAggregations = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.aggregate({
            where: {
                status: "AVAILABLE"
            },
            _min: {
                price: true
            },
            _max: {
                price: true
            }
        });
        return {
            success: true,
            data: {
                makes: makes.map((item)=>item.make),
                bodyTypes: bodyTypes.map((item)=>item.bodyType),
                fuelTypes: fuelTypes.map((item)=>item.fuelType),
                transmissions: transmissions.map((item)=>item.transmission),
                priceRange: {
                    min: priceAggregations._min.price ? parseFloat(priceAggregations._min.price.toString()) : 0,
                    max: priceAggregations._max.price ? parseFloat(priceAggregations._max.price.toString()) : 100000
                }
            }
        };
    } catch (error) {
        throw new Error("Error fetching car filters:" + error.message);
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getCars({ search = "", make = "", bodyType = "", fuelType = "", transmission = "", minPrice = 0, maxPrice = Number.MAX_SAFE_INTEGER, sortBy = "newest", page = 1, limit = 6 }) {
    try {
        // Get current user if authenticated
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        let dbUser = null;
        if (userId) {
            dbUser = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
                where: {
                    clerkUserId: userId
                }
            });
        }
        // Build where conditions
        let where = {
            status: "AVAILABLE"
        };
        if (search) {
            where.OR = [
                {
                    make: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    model: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    description: {
                        contains: search,
                        mode: "insensitive"
                    }
                }
            ];
        }
        if (make) where.make = {
            equals: make,
            mode: "insensitive"
        };
        if (bodyType) where.bodyType = {
            equals: bodyType,
            mode: "insensitive"
        };
        if (fuelType) where.fuelType = {
            equals: fuelType,
            mode: "insensitive"
        };
        if (transmission) where.transmission = {
            equals: transmission,
            mode: "insensitive"
        };
        // Add price range
        where.price = {
            gte: parseFloat(minPrice) || 0
        };
        if (maxPrice && maxPrice < Number.MAX_SAFE_INTEGER) {
            where.price.lte = parseFloat(maxPrice);
        }
        // Calculate pagination
        const skip = (page - 1) * limit;
        // Determine sort order
        let orderBy = {};
        switch(sortBy){
            case "priceAsc":
                orderBy = {
                    price: "asc"
                };
                break;
            case "priceDesc":
                orderBy = {
                    price: "desc"
                };
                break;
            case "newest":
            default:
                orderBy = {
                    createdAt: "desc"
                };
                break;
        }
        // Get total count for pagination
        const totalCars = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.count({
            where
        });
        // Execute the main query
        const cars = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.findMany({
            where,
            take: limit,
            skip,
            orderBy
        });
        // If we have a user, check which cars are wishlisted
        let wishlisted = new Set();
        if (dbUser) {
            const savedCars = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].userSavedCar.findMany({
                where: {
                    userId: dbUser.id
                },
                select: {
                    carId: true
                }
            });
            wishlisted = new Set(savedCars.map((saved)=>saved.carId));
        }
        // Serialize and check wishlist status
        const serializedCars = cars.map((car)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeCarData"])(car, wishlisted.has(car.id)));
        return {
            success: true,
            data: serializedCars,
            pagination: {
                total: totalCars,
                page,
                limit,
                pages: Math.ceil(totalCars / limit)
            }
        };
    } catch (error) {
        throw new Error("Error fetching cars:" + error.message);
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ toggleSavedCar(carId) {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) throw new Error("Unauthorized");
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
            where: {
                clerkUserId: userId
            }
        });
        if (!user) throw new Error("User not found");
        // Check if car exists
        const car = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.findUnique({
            where: {
                id: carId
            }
        });
        if (!car) {
            return {
                success: false,
                error: "Car not found"
            };
        }
        // Check if car is already saved
        const existingSave = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].userSavedCar.findUnique({
            where: {
                userId_carId: {
                    userId: user.id,
                    carId
                }
            }
        });
        // If car is already saved, remove it
        if (existingSave) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].userSavedCar.delete({
                where: {
                    userId_carId: {
                        userId: user.id,
                        carId
                    }
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/saved-cars`);
            return {
                success: true,
                saved: false,
                message: "Car removed from favorites"
            };
        }
        // If car is not saved, add it
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].userSavedCar.create({
            data: {
                userId: user.id,
                carId
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/saved-cars`);
        return {
            success: true,
            saved: true,
            message: "Car added to favorites"
        };
    } catch (error) {
        throw new Error("Error toggling saved car:" + error.message);
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getCarById(carId) {
    try {
        // Get current user if authenticated
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        let dbUser = null;
        if (userId) {
            dbUser = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
                where: {
                    clerkUserId: userId
                }
            });
        }
        // Get car details
        const car = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.findUnique({
            where: {
                id: carId
            }
        });
        if (!car) {
            return {
                success: false,
                error: "Car not found"
            };
        }
        // Check if car is wishlisted by user
        let isWishlisted = false;
        if (dbUser) {
            const savedCar = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].userSavedCar.findUnique({
                where: {
                    userId_carId: {
                        userId: dbUser.id,
                        carId
                    }
                }
            });
            isWishlisted = !!savedCar;
        }
        // Check if user has already booked a test drive for this car
        const existingTestDrive = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].testDriveBooking.findFirst({
            where: {
                carId,
                userId: dbUser.id,
                status: {
                    in: [
                        "PENDING",
                        "CONFIRMED",
                        "COMPLETED"
                    ]
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        let userTestDrive = null;
        if (existingTestDrive) {
            userTestDrive = {
                id: existingTestDrive.id,
                status: existingTestDrive.status,
                bookingDate: existingTestDrive.bookingDate.toISOString()
            };
        }
        // Get dealership info for test drive availability
        const dealership = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].dealershipInfo.findFirst({
            include: {
                workingHours: true
            }
        });
        return {
            success: true,
            data: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeCarData"])(car, isWishlisted),
                testDriveInfo: {
                    userTestDrive,
                    dealership: dealership ? {
                        ...dealership,
                        createdAt: dealership.createdAt.toISOString(),
                        updatedAt: dealership.updatedAt.toISOString(),
                        workingHours: dealership.workingHours.map((hour)=>({
                                ...hour,
                                createdAt: hour.createdAt.toISOString(),
                                updatedAt: hour.updatedAt.toISOString()
                            }))
                    } : null
                }
            }
        };
    } catch (error) {
        throw new Error("Error fetching car details:" + error.message);
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getSavedCars() {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) {
            return {
                success: false,
                error: "Unauthorized"
            };
        }
        // Get the user from our database
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
            where: {
                clerkUserId: userId
            }
        });
        if (!user) {
            return {
                success: false,
                error: "User not found"
            };
        }
        // Get saved cars with their details
        const savedCars = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].userSavedCar.findMany({
            where: {
                userId: user.id
            },
            include: {
                car: true
            },
            orderBy: {
                savedAt: "desc"
            }
        });
        // Extract and format car data
        const cars = savedCars.map((saved)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeCarData"])(saved.car));
        return {
            success: true,
            data: cars
        };
    } catch (error) {
        console.error("Error fetching saved cars:", error);
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getCarFilters,
    getCars,
    toggleSavedCar,
    getCarById,
    getSavedCars
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCarFilters, "003c38c786f479816960b13d9cc1cc38ce1a4ff0c6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCars, "402f3dfb46d3c945246504f34a5ea6ce51b33cf530", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleSavedCar, "409e5ad48eb997a98fca6799042658673603470dcb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCarById, "409ff24b5a226a48a885dc2ed4d5fdae8e230b35b8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSavedCars, "003b4417bea7217c72ccbae7aeb067968059ac43fa", null);
}}),
"[project]/app/(main)/cars/[id]/_components/car-details.jsx (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CarDetails": (()=>CarDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const CarDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CarDetails() from the server but CarDetails is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(main)/cars/[id]/_components/car-details.jsx <module evaluation>", "CarDetails");
}}),
"[project]/app/(main)/cars/[id]/_components/car-details.jsx (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CarDetails": (()=>CarDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const CarDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CarDetails() from the server but CarDetails is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(main)/cars/[id]/_components/car-details.jsx", "CarDetails");
}}),
"[project]/app/(main)/cars/[id]/_components/car-details.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$cars$2f5b$id$5d2f$_components$2f$car$2d$details$2e$jsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/(main)/cars/[id]/_components/car-details.jsx (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$cars$2f5b$id$5d2f$_components$2f$car$2d$details$2e$jsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/app/(main)/cars/[id]/_components/car-details.jsx (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$cars$2f5b$id$5d2f$_components$2f$car$2d$details$2e$jsx__$28$client__proxy$29$__);
}}),
"[project]/app/(main)/cars/[id]/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CarDetailsPage),
    "generateMetadata": (()=>generateMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/actions/car-listing.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$cars$2f5b$id$5d2f$_components$2f$car$2d$details$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(main)/cars/[id]/_components/car-details.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
async function generateMetadata({ params }) {
    const { id } = await params;
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCarById"])(id);
    if (!result.success) {
        return {
            title: "Car Not Found | Vehiql",
            description: "The requested car could not be found"
        };
    }
    const car = result.data;
    return {
        title: `${car.year} ${car.make} ${car.model} | Vehiql`,
        description: car.description.substring(0, 160),
        openGraph: {
            images: car.images?.[0] ? [
                car.images[0]
            ] : []
        }
    };
}
async function CarDetailsPage({ params }) {
    // Fetch car details
    const { id } = await params;
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCarById"])(id);
    // If car not found, show 404
    if (!result.success) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$cars$2f5b$id$5d2f$_components$2f$car$2d$details$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CarDetails"], {
            car: result.data,
            testDriveInfo: result.data.testDriveInfo
        }, void 0, false, {
            fileName: "[project]/app/(main)/cars/[id]/page.jsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(main)/cars/[id]/page.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/(main)/cars/[id]/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_namespace__(__turbopack_import__("[project]/app/(main)/cars/[id]/page.jsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_ffaa15._.js.map