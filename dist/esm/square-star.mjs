export const name="square-star";
export const id="dl_da44615bf570494b89a9";
export const url=new URL("../icons/square-star.svg?v=5c7476f5fbf15a5dcb5802870cf79a92da56a203dee8eaef844353fbd665878b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
