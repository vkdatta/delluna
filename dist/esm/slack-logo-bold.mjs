export const name="slack-logo-bold";
export const id="dl_44f4cd85e6bf66680962";
export const url=new URL("../icons/slack-logo-bold.svg?v=685e78b44962a2b9a7cf3072bbd27d141305c09cde654da5ed0e4089d4fa499c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
