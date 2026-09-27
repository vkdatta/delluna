export const name="number-square-three-duotone";
export const id="dl_833e15ab6d714452b47a";
export const url=new URL("../icons/number-square-three-duotone.svg?v=5e0ce433e3991b745c536a0041ee8c00dbfb3e1315ae97d76efa55bc620e007f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
