export const name="triangle-bold";
export const id="dl_5ca9d249d23c1301a353";
export const url=new URL("../icons/triangle-bold.svg?v=9094704a053f18116c01812162b8025bb021bee4a74c1c3b2b6fc7cb55eedb58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
