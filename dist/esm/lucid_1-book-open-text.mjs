export const name="lucid_1-book-open-text";
export const id="dl_9c830b3bf959432f9576";
export const url=new URL("../icons/lucid_1-book-open-text.svg?v=3d2340a8528b06717ad53b7c9930be7a4a0e2338bb7efc3db7a670110eecfad2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
