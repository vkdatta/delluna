export const name="shooting-star-thin";
export const id="dl_91845a07848f593b59a7";
export const url=new URL("../icons/shooting-star-thin.svg?v=85fcdb6e6cc7fe723b6688baa8ad4f9465fb1471c9cbbdedb3de1f8297b85864",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
