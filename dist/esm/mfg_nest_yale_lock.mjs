export const name="mfg_nest_yale_lock";
export const id="dl_95fd66fee69747da000b";
export const url=new URL("../icons/mfg_nest_yale_lock.svg?v=6827360bfcb6ea0222a3e2c6225c7b224ec714d042f02f303bd42c7fa2e816e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
