export const name="dot";
export const id="dl_57f7a8079006438b85a2";
export const url=new URL("../icons/dot.svg?v=e12eac415b71245e747ec2dfc74190ecb57007d2ef4722ea681632e0afbe6af3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
