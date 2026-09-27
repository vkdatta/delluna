export const name="flag-light";
export const id="dl_60b0937d9ed14f3bb1bf";
export const url=new URL("../icons/flag-light.svg?v=b3cb1d67f6def67201da3ac6c2f92fa47cd6dabbe052fb24ce42e0b6bcfb3aa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
