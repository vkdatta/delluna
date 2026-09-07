export const name="tiktok-logo";
export const id="dl_48845b838c834c179581";
export const url=new URL("../icons/T/tiktok-logo.svg?v=9baafbb91a2ead31e705160fe47152197bddf930e268c9322540784e1f831ed9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
