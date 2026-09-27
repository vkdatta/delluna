export const name="unlink";
export const id="dl_c8c37666da3c44e3919f";
export const url=new URL("../icons/unlink.svg?v=5d37da6b8c0686be85a273a0967d39d9f9fc879f915efdfbe0d37eb6fcaa129f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
