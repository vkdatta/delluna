export const name="bomb-thin";
export const id="dl_a19d2be794534ccdbf6e";
export const url=new URL("../icons/bomb-thin.svg?v=3a17e02f6e6615d211d262590154c87d8e4526cc47b4442ca060452356c9a2b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
