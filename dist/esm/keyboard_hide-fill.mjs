export const name="keyboard_hide-fill";
export const id="dl_62a5b0a8bf5b9e355fa8";
export const url=new URL("../icons/keyboard_hide-fill.svg?v=61c1be78ab41449b3ac6cf4d912764eb04a7b2f91fbfab57e0d1e936330c0b13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
