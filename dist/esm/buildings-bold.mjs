export const name="buildings-bold";
export const id="dl_1fd448e7477e432099b0";
export const url=new URL("../icons/buildings-bold.svg?v=7e0df733ed4e5c3016d453ebadb919569870606fd8f8a1ee888df637a2769382",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
