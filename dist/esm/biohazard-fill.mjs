export const name="biohazard-fill";
export const id="dl_64b339b3f2fd4f6f924b";
export const url=new URL("../icons/biohazard-fill.svg?v=fcb908ed5677e461ffa789fc27acbaf84166cf7bbcbc248edc6fc9e158d2e4e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
