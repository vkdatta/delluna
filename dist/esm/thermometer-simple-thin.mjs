export const name="thermometer-simple-thin";
export const id="dl_79fbc52c37204d82a569";
export const url=new URL("../icons/T/thermometer-simple-thin.svg?v=95310b06cd261f0d085b2e74d4879cb49bb6675fd1ae1c142c3fbca123fedb5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
