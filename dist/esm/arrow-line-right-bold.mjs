export const name="arrow-line-right-bold";
export const id="dl_b47bbd9ecfe342628f35";
export const url=new URL("../icons/arrow-line-right-bold.svg?v=bc729d7f66840096625de8809e5b879c8f23938338839190a62d528f6d0b9996",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
