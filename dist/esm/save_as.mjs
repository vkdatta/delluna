export const name="save_as";
export const id="dl_085324b16edada7b1235";
export const url=new URL("../icons/save_as.svg?v=6b57f7c4af8f7d5e678788fc2a84bc1b943ef8b9af6fbc4833bb7bec90411bd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
