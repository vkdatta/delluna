export const name="microscope";
export const id="dl_1dccd67d94ae4164b4f5";
export const url=new URL("../icons/microscope.svg?v=ad7b288180cb7ee0a914acb48d7fbecd1230cf677a5d554cc1c8a9c29d8e1729",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
