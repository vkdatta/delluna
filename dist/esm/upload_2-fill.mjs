export const name="upload_2-fill";
export const id="dl_90fc147b57a64448895f";
export const url=new URL("../icons/U/upload_2-fill.svg?v=8dfabfc5e8e8c8598e3f7e774065739fee9017426a8edb85beb5277e16821939",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
