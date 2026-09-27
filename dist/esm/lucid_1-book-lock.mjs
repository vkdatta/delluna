export const name="lucid_1-book-lock";
export const id="dl_1c67058694f84848a9e9";
export const url=new URL("../icons/lucid_1-book-lock.svg?v=5b9de0bf4706b979c08c617b24b8a7f2aca6fd964b74a0d097d8430c39d779bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
