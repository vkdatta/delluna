export const name="target";
export const id="dl_641c5e5f252da87e82b9";
export const url=new URL("../icons/target.svg?v=e554a3fa3704fd396e26a9de7b55576d5c9a4b6f799c88f66317b4a9205fff5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
