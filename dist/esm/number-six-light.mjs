export const name="number-six-light";
export const id="dl_119599d0862d45ffa48b";
export const url=new URL("../icons/number-six-light.svg?v=699e261373c409f6ebf70a8ad3310d7528f98a4f237ed2d08038ebb875d566c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
