export const name="skip-back-circle-fill";
export const id="dl_88f0aa9b18c609ef1e32";
export const url=new URL("../icons/skip-back-circle-fill.svg?v=60c5ea3b1a54f5705079f29c6d5f05233b90da26a8134861ee7fc66907e644eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
