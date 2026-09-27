export const name="heart-light";
export const id="dl_2326bf6d572441c1aaaa";
export const url=new URL("../icons/heart-light.svg?v=90d7d385fbf31a23764d6b953fb93015b6ced33c6c9115f467e49c49c9e62f5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
