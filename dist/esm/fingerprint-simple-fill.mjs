export const name="fingerprint-simple-fill";
export const id="dl_fbc26abe55824a05b1c9";
export const url=new URL("../icons/fingerprint-simple-fill.svg?v=abee99f1656e1d2bb043fb98fec82eb37e8208d5ac20d7c43a95716a65210ab0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
