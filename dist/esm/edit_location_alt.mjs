export const name="edit_location_alt";
export const id="dl_93a9222bc449839ed7cc";
export const url=new URL("../icons/edit_location_alt.svg?v=e121baca4091d0f72b6372c3a56ff8bbf6b8e8b2472e6c12f26d5e7a5b72f941",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
