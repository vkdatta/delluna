export const name="auto_awesome_motion";
export const id="dl_d1c81d7a32d84b1bb488";
export const url=new URL("../icons/auto_awesome_motion.svg?v=1b5c307c27de3ace3a1d76ed8e436a3cca5d2786ab92ad4c1c1637143a51fc24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
