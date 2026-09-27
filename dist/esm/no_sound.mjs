export const name="no_sound";
export const id="dl_ba95a3316d525272e1be";
export const url=new URL("../icons/no_sound.svg?v=fb1630800f9738ef7800b5a08c1a969789a0af9ca752d8a8945917f17be27669",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
