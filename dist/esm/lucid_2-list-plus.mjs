export const name="lucid_2-list-plus";
export const id="dl_82920c97c54f4f78aeb5";
export const url=new URL("../icons/lucid_2-list-plus.svg?v=949bcc7ee91db30ed867a6c6bd239ad73fc62e567d0a82d57833026426d28388",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
