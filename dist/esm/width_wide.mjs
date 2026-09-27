export const name="width_wide";
export const id="dl_4624c8145274912bc5e0";
export const url=new URL("../icons/width_wide.svg?v=eeddb8a98978aef674754d4bf1db3a90fb01ee60b49f194c1ee3905d241b1abd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
