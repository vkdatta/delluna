export const name="margin-fill";
export const id="dl_c3606aedf13e2c167d54";
export const url=new URL("../icons/margin-fill.svg?v=d7439e4bd753903ffda94dcfa092fef9b23cbb7f5259b674375daba62d9179d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
