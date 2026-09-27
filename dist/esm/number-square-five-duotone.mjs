export const name="number-square-five-duotone";
export const id="dl_c78ae8b7916d4b7a8ae7";
export const url=new URL("../icons/number-square-five-duotone.svg?v=a379a42e3b4cd3d0c589843c6c55c765d9ded223e12559f1f9b6feb835b4ddc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
