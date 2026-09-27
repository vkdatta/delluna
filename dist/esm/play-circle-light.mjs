export const name="play-circle-light";
export const id="dl_ed2f02adc15c41fdb3c4";
export const url=new URL("../icons/play-circle-light.svg?v=e1881aad1df4d36b223c2b565205c00a6eff5b8dedfb65d395f9ec8bfc9e5f37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
