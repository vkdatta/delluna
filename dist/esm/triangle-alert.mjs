export const name="triangle-alert";
export const id="dl_2bf1b2da7bcc4f03bf0b";
export const url=new URL("../icons/triangle-alert.svg?v=d650642b23ba3011b65b3ee09a70733dcedb1f1af5e01fd7a30185a00fe0064d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
