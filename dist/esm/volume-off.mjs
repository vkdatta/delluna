export const name="volume-off";
export const id="dl_00e60c8fe9d849d89d4d";
export const url=new URL("../icons/volume-off.svg?v=4960b366ea1a5fad0102fd724ed0921ea33bb642c49210a275ad75eb1fe8a119",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
