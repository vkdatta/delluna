export const name="building-office-thin";
export const id="dl_05914abe3986405dbfa7";
export const url=new URL("../icons/building-office-thin.svg?v=775bf8baadd1e46c48f88c57020fd6c2479ff18142fb08eab01aa2026f13aa8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
