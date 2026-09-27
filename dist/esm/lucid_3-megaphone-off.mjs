export const name="lucid_3-megaphone-off";
export const id="dl_21f3b1e927e743d09139";
export const url=new URL("../icons/lucid_3-megaphone-off.svg?v=e9c86f7f29b80ea6f8410b3bfb6c44ba093f73d5c21b29a281afb9e0f5e5cdda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
