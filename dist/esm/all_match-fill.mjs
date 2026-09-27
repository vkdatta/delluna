export const name="all_match-fill";
export const id="dl_78a19cbe9ac86d501774";
export const url=new URL("../icons/all_match-fill.svg?v=2d8839c325a4118c7323131c7608562c0c3ed1deb9efbfead69510ff73aadf88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
