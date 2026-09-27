export const name="line_end_arrow_notch";
export const id="dl_88c7a87428349ae6a752";
export const url=new URL("../icons/line_end_arrow_notch.svg?v=63fad701616c4a14e782a08aba770669566a91299ea31db77117c4a8f17c348f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
