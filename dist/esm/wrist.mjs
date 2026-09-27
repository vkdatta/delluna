export const name="wrist";
export const id="dl_13ab18a7cf5dea6ad226";
export const url=new URL("../icons/wrist.svg?v=304eb45e5f22372c22237ae71f2f08c022ab4f87dd115d981cd284a1ac126c7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
