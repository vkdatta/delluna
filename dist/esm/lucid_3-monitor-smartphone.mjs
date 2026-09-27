export const name="lucid_3-monitor-smartphone";
export const id="dl_c86bd0bb90fb48f197eb";
export const url=new URL("../icons/lucid_3-monitor-smartphone.svg?v=e4e8f404f8f3045fad403d1f926916f0ec98f510cc10578947b6894872e5b133",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
