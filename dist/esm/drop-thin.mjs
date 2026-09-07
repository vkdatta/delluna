export const name="drop-thin";
export const id="dl_8502658fc6c443a2bcdb";
export const url=new URL("../icons/drop-thin.svg?v=79a44ba9144035c72252483b48bb4566776e331210e1fd18362749c434919dfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
