export const name="sparkle-bold";
export const id="dl_c827ba678a344e65b7ea";
export const url=new URL("../icons/sparkle-bold.svg?v=4565fa2e78718641f52adbdc15acf187d4c7e6f356e6cdb0211206b171ddcf90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
