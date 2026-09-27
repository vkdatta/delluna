export const name="tag-light";
export const id="dl_7e07b25bc1bdecf73654";
export const url=new URL("../icons/tag-light.svg?v=31ddc5739f0db3a94e5638349812c230ec9f0fdb10058b28646538229ca44def",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
