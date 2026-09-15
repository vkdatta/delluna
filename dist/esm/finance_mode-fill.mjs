export const name="finance_mode-fill";
export const id="dl_271a976868f14fd1bccb";
export const url=new URL("../icons/F/finance_mode-fill.svg?v=ebcd330712ee4898a388598983e28619319ac967a376135cc3ae1314f50c9b99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
