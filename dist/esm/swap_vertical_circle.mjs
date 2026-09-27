export const name="swap_vertical_circle";
export const id="dl_ee9345cb1b8fb90eb48b";
export const url=new URL("../icons/swap_vertical_circle.svg?v=4884e2b60973219d22e953aa296719e6ccdbbcb1872c127a89536aac10860539",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
