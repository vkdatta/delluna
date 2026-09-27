export const name="screen_record-fill";
export const id="dl_300e4da3bb6ccea598ac";
export const url=new URL("../icons/screen_record-fill.svg?v=045dc37ee802ccaca777fc6a2a8b56635014caf5a9d281e32ce93b1cce4c9a18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
