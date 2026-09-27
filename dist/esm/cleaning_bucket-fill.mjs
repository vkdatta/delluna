export const name="cleaning_bucket-fill";
export const id="dl_62f22e31a638f45ca32b";
export const url=new URL("../icons/cleaning_bucket-fill.svg?v=86dd4e79c680895a4d9f8ef4e15a3622d457aaa6971a5b87e2340200b97e30c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
