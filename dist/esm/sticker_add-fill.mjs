export const name="sticker_add-fill";
export const id="dl_36cd3008ab90130e77ef";
export const url=new URL("../icons/sticker_add-fill.svg?v=1aeee7078d70b87654293e65300db6671431cae54e08799cc91dbf3594517a7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
