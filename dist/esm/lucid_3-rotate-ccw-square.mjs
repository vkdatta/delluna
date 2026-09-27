export const name="lucid_3-rotate-ccw-square";
export const id="dl_f709b3327c2749fc82e8";
export const url=new URL("../icons/lucid_3-rotate-ccw-square.svg?v=c5279dc9b6a960efb2f4a8a64142a4b2d83e82084b9c39ae8a0f900554cb385d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
