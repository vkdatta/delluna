export const name="apple-podcasts-logo-light";
export const id="dl_ce34c98bb1424ab98d9d";
export const url=new URL("../icons/apple-podcasts-logo-light.svg?v=668395a56a3786bae54ae327e3e74f86528dffc3157df92767bcc80dc4027726",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
