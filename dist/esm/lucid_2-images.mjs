export const name="lucid_2-images";
export const id="dl_3fc237b8dcc0486999e0";
export const url=new URL("../icons/lucid_2-images.svg?v=0d8df5ca292c2bddfb5b6b9ca60352db0acebb963ed8bedf1bbf783850250337",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
