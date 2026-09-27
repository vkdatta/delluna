export const name="google-drive-logo";
export const id="dl_f7e09318c8b4471cb825";
export const url=new URL("../icons/google-drive-logo.svg?v=00af8a2d052c8995b84eaa617890729136c432b58526f17b09372099c98f8265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
