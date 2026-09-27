export const name="spray-bottle-light";
export const id="dl_cff9650e6099bc3b6f10";
export const url=new URL("../icons/spray-bottle-light.svg?v=032ea24edf2b69483f8b5f15a2bf85ad5027a26ee7a40cccc2db08fb2b3d8b9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
