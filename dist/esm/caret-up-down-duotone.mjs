export const name="caret-up-down-duotone";
export const id="dl_65293ff33c014d8687ac";
export const url=new URL("../icons/caret-up-down-duotone.svg?v=f3fdcea8d084db77020e42383f7e105f91b206c071e52316888a32f241cbbd88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
