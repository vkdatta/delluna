export const name="atr-fill";
export const id="dl_f3294385d331e347dce5";
export const url=new URL("../icons/atr-fill.svg?v=c964c87f9e0ab50799bc22ad0cd9a3988b8077736ca76e4d22266c2f1be217b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
