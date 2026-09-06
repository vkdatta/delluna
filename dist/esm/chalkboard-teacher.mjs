export const name="chalkboard-teacher";
export const id="dl_318011005a4945c99ff3";
export const url=new URL("../icons/chalkboard-teacher.svg?v=d8c1d88f30260ce8cdf465e7d0804caee9b996932c23cc240ed9652ad9fc750f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
