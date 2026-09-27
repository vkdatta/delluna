export const name="neurology";
export const id="dl_7d6584addbc559968771";
export const url=new URL("../icons/neurology.svg?v=81149ca388c12b291c38c18d5448443a98dc89e945712e0ed1f35cb75d343cc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
