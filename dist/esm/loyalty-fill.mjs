export const name="loyalty-fill";
export const id="dl_3b99eb9e82bcf981b762";
export const url=new URL("../icons/loyalty-fill.svg?v=835c9e7134863adb820ee088bb4bf94d5542f49a41df83bf6e693cef3439a626",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
