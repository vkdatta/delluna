export const name="mic_external_off-fill";
export const id="dl_aab49c26abfadf71f190";
export const url=new URL("../icons/mic_external_off-fill.svg?v=0b4192749569599d6069cb022ef468eb1dad2cc4d042f01268a5e6158f71b22c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
