export const name="lucid_2-folder-input";
export const id="dl_c7ef82ba5f5447488779";
export const url=new URL("../icons/lucid_2-folder-input.svg?v=ba3c86107af5a8f80658ac07b00b639641351073220b849a7bd34337ac40d6e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
