export const name="hide_image";
export const id="dl_096a086237abca54d77b";
export const url=new URL("../icons/hide_image.svg?v=2fb8b7f107519edc707e4bf13410dcdf8cd3ac4cf24473beba78a5532efa1f4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
