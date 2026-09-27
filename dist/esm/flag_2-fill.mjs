export const name="flag_2-fill";
export const id="dl_2765ff847b4c0864cd83";
export const url=new URL("../icons/flag_2-fill.svg?v=4d48527cc3e790cd6c989c5c6cd014c2d96fbbe144be7c5f2aacde7e808c11dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
