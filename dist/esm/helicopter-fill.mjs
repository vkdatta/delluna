export const name="helicopter-fill";
export const id="dl_4e27fe45db62b44a37db";
export const url=new URL("../icons/helicopter-fill.svg?v=44a20255715635b78d5b84f8ff7c59a48b5bc0b2a5925783d64fee22f603df33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
