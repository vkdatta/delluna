export const name="phone-transfer-fill";
export const id="dl_df5081355222488b8a5c";
export const url=new URL("../icons/phone-transfer-fill.svg?v=9b0daeb6f3ada5e160429bfff0f7c49893b17815b983025371d5a62dc239f3a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
