export const name="monitor-thin";
export const id="dl_e20c6db2884f45fcaaf2";
export const url=new URL("../icons/monitor-thin.svg?v=3bd79572f5e7c17f1c2d45d0495bcfa8549ec19412963f0a528559597e8a39f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
