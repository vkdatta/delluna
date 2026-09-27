export const name="accessibility_new-fill";
export const id="dl_7a4d6495949ad7211194";
export const url=new URL("../icons/accessibility_new-fill.svg?v=887fc3b0cd29b57fdc7934036c114bde10ca17d7b3240e962366e6f491898160",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
