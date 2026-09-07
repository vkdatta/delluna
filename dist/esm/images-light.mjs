export const name="images-light";
export const id="dl_b94bb401499a46b5a5dd";
export const url=new URL("../icons/images-light.svg?v=f3ae6f5b0d94e71da9da0c82754ecb784ac41d8d4b18b78405b44c77edf7ccae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
