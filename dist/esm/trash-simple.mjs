export const name="trash-simple";
export const id="dl_143b358e42af315d3d11";
export const url=new URL("../icons/trash-simple.svg?v=157d8a63268aa5eebe3ba67ea31c6394b48e3c25cc1fd6bec918a5aa5c067fc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
