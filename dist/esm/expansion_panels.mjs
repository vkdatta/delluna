export const name="expansion_panels";
export const id="dl_cd7dc79c7727437e85da";
export const url=new URL("../icons/E/expansion_panels.svg?v=6266d0e22ef00b705e2bd4b2f9ba3ba2fdda45ed3693fd2507dab86242a3a821",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
