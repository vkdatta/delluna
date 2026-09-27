export const name="voicemail_2-fill";
export const id="dl_23450ac7dc870189e400";
export const url=new URL("../icons/voicemail_2-fill.svg?v=b55e9b6477e9b1df64939119c328f0c80afb5720bcfc0750e24a636002ff5037",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
