import React from "react";

const Products = () => {
  return (
    <div className="kabert__products p-6  text-gray-700" id="products">
      <h1 className="text-4xl sm:text-6xl font-bold py-2 md:py-4 m-5 mt-16 bg-gradient-to-r from-emerald-500 to-slate-700 text-transparent bg-clip-text inline-block">
        High-quality Products
      </h1>
      <div>
        <div>
          <div className=" m-1 mb-4 p-4   ">
            <h4 className="text-2xl sm:text-4xl font-bold">Fiberglass Cloth</h4>
            <p className="text-sm sm:text-lg">
              <br />
              Since 1979 Kabert Industries has been weaving fiberglass cloth in
              Lynn, Indiana for the aluminum industry. Fiberglass cloth is an
              inexpensive and effective method of non-ferrous molten metal
              distribution and filtration. <br /> <br /> Kabert Industries cloth
              is available in a variety of styles. Plain weave is a simple weave
              where the warp yarns run over and under the fill yarns. Similarly,
              twill weave consists of the warp yarns running over two or more
              fill yarns. The leno weave style interlocks the warp yarns, which
              cross over each other and join together with the fill yarns. Also,
              three, four and six strand cloths are available. <br /> <br />
              All of Kabert Industries cloth is woven to specification on
              approximately 100 linear yard rolls. Standard widths are
              obtainable for each style. Minimum orders may apply on some
              widths. Standard or brown finishes are available.
            </p>
          </div>
        </div>
        <div className=" ">
          <div className=" m-1 p-4 mb-4 ">
            <h4 className="text-2xl sm:text-4xl font-bold">
              Vacuum Formed Shapes
            </h4>
            <p className="text-sm sm:text-lg">
              <br />
              Kabert Industries vacuum formed shapes are produced by dewatering
              a slurry of Fiberfrax Bulk Ceramic Fibers and special high
              temperature binders. This manufacturing method permits
              considerable freedom to vary shape, thickness, density and
              hardness. Often the vacuum casting technique provides the most
              economical answer to producing large quantities of parts in simple
              or complex configurations. <br /> <br />
              Our vacuum formed shapes resist attack from the most corrosive
              agents. Exceptions are hydrofluoric and phosphoric acids and
              concentrated alkalies. Vacuum cast parts also resist oxidation and
              reduction. If wet by water or steam, thermal and physical
              properties are completely restored upon drying. No water of
              hydration is present. <br /> <br />
            </p>
            {/* There will need to be tables and lists for the rest of the information provided here */}
          </div>
          <div className=" m-1 p-4 mb-4 ">
            <h4 className="text-2xl sm:text-4xl font-bold">Mini Channel Bag</h4>
            <p className="text-sm sm:text-lg">
              <br />
              An inexpensive and effective method of distributing molten
              aluminum to appropriate areas of the mold. Kabert Industries mini
              channel bags have been successfully used since 1980 in all alloys
              including body and lid. <br /> <br />
              The closeweave outer jacket distributes hot metal away from the
              center to the ends of the mold reducing the possibility of a
              dished butt crack at the start of a cast. The open weave lessens
              the possibility of build-up inside the bag during casting. Easier
              to install and remove. Standard designs in stock. Any size or
              style manufactured to specification. Special hangers can be
              installed in trough.
            </p>
            {/* There will need to be tables and lists for the rest of the information provided here */}
          </div>
          <div className=" m-1 p-4 mb-4 ">
            <h4 className="text-2xl sm:text-4xl font-bold">Gaskets</h4>
            <p className="text-sm sm:text-lg">
              <br />
              Gaskets are an inexpensive method of sealing and insulating
              troughs. Fiberglass insulation is die or hand cut to any
              specification gasket. Gaskets can be sewn onto fiberglass trough
              socks to filter out large impurities upstream so they will not
              break the sniff nozzle and downstream so they will not block the
              control pin. The temperature prior to breakdown is 600 to 700
              degrees Fahrenheit. Fiberglass insulation is available in a
              variety of thickness and densities. <br /> <br />
              <strong>Density</strong>: 2 LB, 3 LB, 4 LB, or 6 LB <br />{" "}
              <strong>Thickness</strong>: 1/2", 3/4", or 1"
            </p>
          </div>
        </div>
      </div>
      <h1 className="bg-gradient-to-r from-slate-700 to-emerald-500 text-transparent bg-clip-text text-3xl sm:text-5xl font-bold  mt-12 pb-3">
        Fiberglass Cloth Details
      </h1>
      <p className="sm:hidden text-center font-thin text-sm">
        (Swipe/scroll to view)
      </p>
      <div className="kabert__products-table flex md:items-center md:justify-center overflow-auto ">
        {/* <Table /> */}
      </div>
    </div>
  );
};

export default Products;
