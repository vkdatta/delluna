export const name="add";
export const id="dl_0a74e09a0e4940bd975f";
export const url=new URL("../icons/add/add.svg?v=69102e7987459535978851bc9d8f74042f895f08b01a9730c20940e8e499d9cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
