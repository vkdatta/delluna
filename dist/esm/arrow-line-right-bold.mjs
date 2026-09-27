export const name="arrow-line-right-bold";
export const id="dl_b47bbd9ecfe342628f35";
export const url=new URL("../icons/arrow-line-right-bold.svg?v=8f1ef38b3570ae92351b30653344c821f1fe05a4fee27e30c94c39eb8a7ac950",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
