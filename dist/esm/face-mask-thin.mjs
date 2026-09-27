export const name="face-mask-thin";
export const id="dl_e9bd931912f644c49883";
export const url=new URL("../icons/face-mask-thin.svg?v=71daa6ecc64cfc951e1c7099bdfbf5c4ca8f4424e76787d6a27ca072ba5879c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
