export const name="unlicense-fill";
export const id="dl_c4664d18f2d4cd68215b";
export const url=new URL("../icons/unlicense-fill.svg?v=6e16ebe0d4713bcd66781e7481cc4c2976e642562e0bf540a9c5ba6acdb84e24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
