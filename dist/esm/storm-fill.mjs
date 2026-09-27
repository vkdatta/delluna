export const name="storm-fill";
export const id="dl_4634af66273952d284ea";
export const url=new URL("../icons/storm-fill.svg?v=13dcf20c863148be27f2e582c3c64aeed3334b0a40d6c7502fc0d334bfd93669",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
