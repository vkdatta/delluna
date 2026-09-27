export const name="images-square-thin";
export const id="dl_327b279d48e541cd8ff7";
export const url=new URL("../icons/images-square-thin.svg?v=58b1b8f926b3b1cb9cce59aa9a3be337711c879857e8bea9c05f91bbfb3623a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
