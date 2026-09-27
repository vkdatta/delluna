export const name="lucid_2-diamond-minus";
export const id="dl_2276d08c29a84eb1b762";
export const url=new URL("../icons/lucid_2-diamond-minus.svg?v=a4ef32976750c4f44c4cc8a3d75426c112b9ca0bcb22788dbcb2fb7c0e7ac593",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
