export const name="10mp";
export const id="dl_e02b2b49bbd934197bc2";
export const url=new URL("../icons/10mp.svg?v=41506de6197e2b930c6bbd8f337324fb51e5f3058eaf5e4e0465deb8051ad5e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
