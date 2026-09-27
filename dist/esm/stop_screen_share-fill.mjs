export const name="stop_screen_share-fill";
export const id="dl_f8905a1b3db5b3b5b02f";
export const url=new URL("../icons/stop_screen_share-fill.svg?v=778d35728d66270d4405a4f8832f646a1f385b5180f1bdd52ca743091e5b9ea0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
