export const name="switch";
export const id="dl_638917dfc096eeacfc87";
export const url=new URL("../icons/switch.svg?v=b64d6c08f6732df03fdd1543ef8307ab7c783a765591c2a0de38acf22848537d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
