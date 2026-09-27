export const name="cow-duotone";
export const id="dl_66c97190b315461f880a";
export const url=new URL("../icons/cow-duotone.svg?v=eb92af8ea8c751684e34abefabddff577ee6e2cb54e265cda1afaf2da8986b31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
