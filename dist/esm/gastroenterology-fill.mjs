export const name="gastroenterology-fill";
export const id="dl_248f9030c3c3f8dadf0c";
export const url=new URL("../icons/gastroenterology-fill.svg?v=9c78334dfca282a13042c5ec296dd17a36d17157eebf0ecda57e0dc12f0a8960",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
