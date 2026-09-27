export const name="local_cafe";
export const id="dl_8873b3f5c924a695b502";
export const url=new URL("../icons/local_cafe.svg?v=13c86bfb07ad915ab2785d1262be0eb9567e726c95f041ecf282efbd7d8895d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
