export const name="new_label";
export const id="dl_ad8b779253cd758ccf7b";
export const url=new URL("../icons/new_label.svg?v=9d6d3fdd9f342055295c80e17e53aec06300d1450ba77ddd656bc85875344702",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
