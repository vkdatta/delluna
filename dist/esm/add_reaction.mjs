export const name="add_reaction";
export const id="dl_0aac4561c906e0d83941";
export const url=new URL("../icons/add_reaction.svg?v=98e0d8d8075d1d1e4fb8d35fbe3b7c2c6d0825c8e0438121d7dbb57a78b8540d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
