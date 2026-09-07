export const name="cookie-thin";
export const id="dl_62716257eec04daba452";
export const url=new URL("../icons/cookie-thin.svg?v=429dec22876af31fd2947f5ad284b1bf5f034971572ba53360824f7c4e6d4276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
