export const name="lucid_1-calendar";
export const id="dl_90035d3df5ba4a14805c";
export const url=new URL("../icons/lucid_1-calendar.svg?v=e91b8bffa6a36ee77d2ecd3c1001764d68971eafde562b4284e65a3cc1514237",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
