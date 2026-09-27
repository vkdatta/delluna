export const name="shelf_position";
export const id="dl_e555110994c9056ae3c5";
export const url=new URL("../icons/shelf_position.svg?v=7509ce27a6e7f47b117636a38f7a09111bedbb7f3e84aebfaeec05706ce0f3b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
