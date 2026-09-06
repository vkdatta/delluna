export const name="file-zip-light";
export const id="dl_ef9466bb28c2400b8294";
export const url=new URL("../icons/file-zip-light.svg?v=5bc313c5e4b0cefa6575675c04dff8c1875123489ebb72d9622fabb88a8af9b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
