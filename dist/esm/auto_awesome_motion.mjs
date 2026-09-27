export const name="auto_awesome_motion";
export const id="dl_eddafadf32d851d48e3b";
export const url=new URL("../icons/auto_awesome_motion.svg?v=b7b388bf25fee31a0052c2bffad04c90187cb88c179cf3832f920d25d8964d1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
