export const name="lego-smiley-thin";
export const id="dl_1c369acaa7cb4349824c";
export const url=new URL("../icons/lego-smiley-thin.svg?v=299a15bb66ec65cfffda731a2ab8afc819c046ce1b67ba471cc53a40df6f95d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
