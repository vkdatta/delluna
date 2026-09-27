export const name="apple-logo-light";
export const id="dl_e5b7a373f66e47f9a93d";
export const url=new URL("../icons/apple-logo-light.svg?v=f2136f16565c167c0d9ac51b3480e9a1e56000213855e52b37aa8519e0b6347b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
