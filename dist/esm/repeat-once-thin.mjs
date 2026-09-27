export const name="repeat-once-thin";
export const id="dl_ad9c1dbfae8b4c0f9433";
export const url=new URL("../icons/repeat-once-thin.svg?v=3618b79ebfc9f6be00ad6dc755c5c2726c3a965a17e8a2ebd1faeee548e6c58a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
