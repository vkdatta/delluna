export const name="detector_battery-fill";
export const id="dl_7fcdf677cbdcc9c8c302";
export const url=new URL("../icons/detector_battery-fill.svg?v=2f0508c4e7e6ed3d2716cd4c9f202a51a28cc92b6519625e2474b63d5b7eb0c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
