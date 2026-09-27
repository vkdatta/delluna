export const name="lucid_1-brick-wall-fire";
export const id="dl_dfaa67c576f94eb1b15d";
export const url=new URL("../icons/lucid_1-brick-wall-fire.svg?v=6452be5ba86997b51a5b344e5e44f3796498c6d641691f26bce4098f78756c9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
