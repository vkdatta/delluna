export const name="paint-brush-household-bold";
export const id="dl_367aed30cb2f464ebbd5";
export const url=new URL("../icons/paint-brush-household-bold.svg?v=5046e078c8f55803c2413a4d325062c16e491a50a52329136d6b28d232ccb1ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
