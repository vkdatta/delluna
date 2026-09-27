export const name="arrow-bend-up-left-duotone";
export const id="dl_cb69ab442b1646e0a625";
export const url=new URL("../icons/arrow-bend-up-left-duotone.svg?v=1c5d7a1c75a1f85c46db3d8fd1e0d4fb5a259cda380cca0bda364887c4b6ee0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
