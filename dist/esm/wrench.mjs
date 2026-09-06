export const name="wrench";
export const id="dl_73068e58dea64e4386ec";
export const url=new URL("../icons/wrench.svg?v=79235ec3ac0e42158af7e8da2ec847f77bcbd2a55983fcd9d414631ee0f4e554",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
