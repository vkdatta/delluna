export const name="percent-fill";
export const id="dl_29008494365f43cebe29";
export const url=new URL("../icons/percent-fill.svg?v=5dcd4b8a7fd5177aa49c58a0a6467c2340e0041f1fbc016e3f2ddb186bd2754b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
