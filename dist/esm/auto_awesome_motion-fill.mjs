export const name="auto_awesome_motion-fill";
export const id="dl_67522da00bfb29ed7357";
export const url=new URL("../icons/auto_awesome_motion-fill.svg?v=eda3c9638397b825315d2da91000c5386aa3bc13fe8f1048bdf3986e73fcc8db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
