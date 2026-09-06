export const name="lucid_1-ampersands";
export const id="dl_be004c3cac68420bac54";
export const url=new URL("../icons/lucid_1-ampersands.svg?v=7946b185ec39d8df93ee27b2980a82f26a67ebc09d0008079906364db33dcc4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
