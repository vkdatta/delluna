export const name="work_update";
export const id="dl_736e94e268ccc45e1fea";
export const url=new URL("../icons/work_update.svg?v=3a667fcb1827242202efef93aa0c82b4d937494feaf7c123a5938b466efee01c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
