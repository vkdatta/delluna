export const name="monitor-thin";
export const id="dl_e20c6db2884f45fcaaf2";
export const url=new URL("../icons/monitor-thin.svg?v=693d114484502b54f87fe32c6ed1384f2ad9176d2df53e1bc8729b9374b0948f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
