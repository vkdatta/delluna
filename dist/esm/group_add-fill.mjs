export const name="group_add-fill";
export const id="dl_f1c087f5f1fd333ae2df";
export const url=new URL("../icons/group_add-fill.svg?v=a73f669077463109ac99b601e42f081773be4256c0b54d2e4a4b2cb409cf466f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
