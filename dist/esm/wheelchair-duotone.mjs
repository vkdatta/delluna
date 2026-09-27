export const name="wheelchair-duotone";
export const id="dl_b0d19f6ce10962dbdffd";
export const url=new URL("../icons/wheelchair-duotone.svg?v=14f633e66bb225254c37a6adf0d330eb717085ada7e2efd6835af0f2e12b57d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
