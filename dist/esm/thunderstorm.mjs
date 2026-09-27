export const name="thunderstorm";
export const id="dl_4281ef1dbcca71d077bf";
export const url=new URL("../icons/thunderstorm.svg?v=a98eb26c1ab4b42a1b741bc24d51c3c7acb6040c5a6c64b30909e1acc482bd4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
