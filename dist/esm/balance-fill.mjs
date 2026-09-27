export const name="balance-fill";
export const id="dl_02d8d54b341b6ea51dbf";
export const url=new URL("../icons/balance-fill.svg?v=6866e00529191ba1e33a085bdfd634f0132227ff734b0480dca2e0c85c46cacd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
