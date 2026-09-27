export const name="arrow-fat-up";
export const id="dl_e9eb6810abe94fc4ab09";
export const url=new URL("../icons/arrow-fat-up.svg?v=730f73ecd4d3c7b2612373be81dda3cf2fc112bc9c30b729b6f479f62a7722a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
