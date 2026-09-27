export const name="hearing_aid_disabled";
export const id="dl_d9d69a136de1826a5782";
export const url=new URL("../icons/hearing_aid_disabled.svg?v=0a120d6e43865629d12ad5ace894bc419c4488500d75b81436da5e572b35d464",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
