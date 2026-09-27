export const name="spiral-fill";
export const id="dl_7783ea978f52f7dbd5bd";
export const url=new URL("../icons/spiral-fill.svg?v=b56cc882961b3b82f7ba69a3360e9114a6980d96d72ededd7abe70ed9e2875a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
