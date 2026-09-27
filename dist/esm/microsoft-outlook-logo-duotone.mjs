export const name="microsoft-outlook-logo-duotone";
export const id="dl_2621ae5e65034bb081cf";
export const url=new URL("../icons/microsoft-outlook-logo-duotone.svg?v=2020f26bf2ef7fb78c97cc92c5bf9113a60a021c063f6629a1378c56630f7ebc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
