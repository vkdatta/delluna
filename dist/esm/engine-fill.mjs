export const name="engine-fill";
export const id="dl_fa7090198ae84fa5b873";
export const url=new URL("../icons/engine-fill.svg?v=12ecc3145d1c7d132747dc7cfdb120ec65c115fea7486556cac5c88bf7f7d25b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
