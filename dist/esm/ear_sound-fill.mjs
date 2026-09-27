export const name="ear_sound-fill";
export const id="dl_c30e10f9bd54471d64b9";
export const url=new URL("../icons/ear_sound-fill.svg?v=7b60a6c2079f93da5dc15a847e03eac88fcc64c89ca24d6782a7bc2e3701d373",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
