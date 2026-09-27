export const name="control-light";
export const id="dl_e7be039089a548f183d8";
export const url=new URL("../icons/control-light.svg?v=923d2f88df4bfda3790de2d7eac5ec96749faf35972f896bf54414f1258635ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
