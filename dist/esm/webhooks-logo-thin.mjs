export const name="webhooks-logo-thin";
export const id="dl_9590c3d3f82a90509a44";
export const url=new URL("../icons/webhooks-logo-thin.svg?v=731ea510012167622a18501d65cac2480f784509090b85f02f16be0873c72dc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
