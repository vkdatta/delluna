export const name="buildings-bold";
export const id="dl_1fd448e7477e432099b0";
export const url=new URL("../icons/buildings-bold.svg?v=307f1eea844fe87d711a4fb7a212383d38d02fd834b0cdaffa958db3dac159ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
