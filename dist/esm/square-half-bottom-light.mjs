export const name="square-half-bottom-light";
export const id="dl_87f801242aae22a836a4";
export const url=new URL("../icons/square-half-bottom-light.svg?v=9a651dea733a097939b5c4ba193904533aaa4e8e3d14fcbc8fbb8c7b1e8cc7a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
