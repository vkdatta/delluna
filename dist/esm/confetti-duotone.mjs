export const name="confetti-duotone";
export const id="dl_059d55145bc64c7fa54b";
export const url=new URL("../icons/confetti-duotone.svg?v=f939f24735526bf5d4dba304972d2c79b3fb1e1e7b302b23155eb4072a021cd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
