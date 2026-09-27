export const name="background_grid_small";
export const id="dl_aa03d8537c63d02278ad";
export const url=new URL("../icons/background_grid_small.svg?v=4fdabac67bc8eb5bc5e69ff5e0e5f4600b82955c882c01bf56425b7ec9ba6828",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
