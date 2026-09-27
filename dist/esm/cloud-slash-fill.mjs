export const name="cloud-slash-fill";
export const id="dl_1f4856dba0104867802f";
export const url=new URL("../icons/cloud-slash-fill.svg?v=63de78bcac34b9e18666c598462df479c2fa265d11933d656ce7cfe9bc5cdaa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
