export const name="lucid_2-gallery-thumbnails";
export const id="dl_944f53105f5c43f1b5df";
export const url=new URL("../icons/lucid_2-gallery-thumbnails.svg?v=cde3f468c365883f5e31166ea5fa50bf56b26eb4166478b34d36c79f847d4b45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
