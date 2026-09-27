export const name="spade-bold";
export const id="dl_7353c16e0f086bb3f8cf";
export const url=new URL("../icons/spade-bold.svg?v=ac6f156ec8b1f821df07b706bdd9a017278668ed825fb74c967dbbe6bc8cdf80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
