export const name="lucid_3-notepad-text-dashed";
export const id="dl_3c9f1f0cc50f466e9f1e";
export const url=new URL("../icons/lucid_3-notepad-text-dashed.svg?v=d94b8c6a7b0961b6d4489008ff7f583a19b3c75483db0dbf2b59b217184cbffa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
