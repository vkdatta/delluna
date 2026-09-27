export const name="forward_to_inbox-fill";
export const id="dl_7f656ae63d5745cab3d2";
export const url=new URL("../icons/forward_to_inbox-fill.svg?v=d1637beebd1c71ccde764b8487d63b2b3835baf2c9bfbbea0e35a4f6ce002853",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
