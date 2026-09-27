export const name="car_defrost_mid_right-fill";
export const id="dl_7c10acad7a2bd3d7e2fd";
export const url=new URL("../icons/car_defrost_mid_right-fill.svg?v=3c99b12e34d7347c6af3e9810af68074373aef8f701c0cdc584134d10aadd72f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
