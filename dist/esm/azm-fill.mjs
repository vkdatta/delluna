export const name="azm-fill";
export const id="dl_25487ac1f7db47da9614";
export const url=new URL("../icons/A/azm-fill.svg?v=651ddadf1231eafe111bce82cd273a9a729a62fc190ac0bdaaea085e2281b6df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
