export const name="note-light";
export const id="dl_0d1ba2a34c564cf4a4b3";
export const url=new URL("../icons/note-light.svg?v=ddcf64e331f1db995123c7ec089c9caabc5a05176b8f59a2c358c0f011260c2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
