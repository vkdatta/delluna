export const name="lucid_3-rotate-cw-square";
export const id="dl_20595aec348b4b83848f";
export const url=new URL("../icons/lucid_3-rotate-cw-square.svg?v=9cb0346ac69228ece7df740a40d3dcf1974503ace5ce286dc07dbf66fad6f1c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
