export const name="phishing-fill";
export const id="dl_8112e188fa978022b7e1";
export const url=new URL("../icons/phishing-fill.svg?v=2982fab7fcffbb06dfc6d2e84ad819929755f8f008a02e3ee694b899a1d78e6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
