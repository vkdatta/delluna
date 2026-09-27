export const name="lucid_2-file-pen-line";
export const id="dl_39ad5fa48be34fb29639";
export const url=new URL("../icons/lucid_2-file-pen-line.svg?v=de95fd9e8eb1879468f5dcf0d724994bca9fe4127c0ee6187e0ebfa881f14deb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
