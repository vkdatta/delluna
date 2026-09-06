export const name="dots-three-duotone";
export const id="dl_6f40e5f42e8e4a4b8dd1";
export const url=new URL("../icons/dots-three-duotone.svg?v=f2dc4416d2cfcd821e56fa747e0f884ef311a147c5161848f2c216f903f57df2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
