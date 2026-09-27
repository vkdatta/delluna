export const name="width_normal";
export const id="dl_ed2411e1a3959d2d6ec2";
export const url=new URL("../icons/width_normal.svg?v=ed5f095c6e6c39763586451aea010c24956bf915ac93285ceaf3c2fb14cf6602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
