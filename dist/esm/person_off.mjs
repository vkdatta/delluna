export const name="person_off";
export const id="dl_3d54f827b4763af6ebc9";
export const url=new URL("../icons/person_off.svg?v=e63612caec667fe766ac08e3158232a6e45ff304c96b525687619e66f51b5e0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
