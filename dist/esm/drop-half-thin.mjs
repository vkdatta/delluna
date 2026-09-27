export const name="drop-half-thin";
export const id="dl_6cb196f5d38e4252ba9b";
export const url=new URL("../icons/drop-half-thin.svg?v=6a6ccedaacbd7bc077659f9e2cbd29d5551b7f10c1fe7d1ad2030f156617df22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
