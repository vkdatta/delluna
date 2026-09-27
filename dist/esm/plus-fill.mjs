export const name="plus-fill";
export const id="dl_606a8e8dd5ee47d9948e";
export const url=new URL("../icons/plus-fill.svg?v=9345d7af8cea37d2081ec5e5e26e964d551eee65bb14b1d6c343fb35f3f896fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
