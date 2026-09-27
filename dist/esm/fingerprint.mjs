export const name="fingerprint";
export const id="dl_1c35151091ef4b978104";
export const url=new URL("../icons/fingerprint.svg?v=69811ba9ab82e406e44728919e2bef8fe352351420741209a5ba62c6f27a8c20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
