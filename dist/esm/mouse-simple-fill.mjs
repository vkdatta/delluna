export const name="mouse-simple-fill";
export const id="dl_3ef7ac1e70ff4935ae0c";
export const url=new URL("../icons/mouse-simple-fill.svg?v=ffce80529e4b78e7477d5328ee0bbd1a27441711b7d144e9cac60ca9b75c5432",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
