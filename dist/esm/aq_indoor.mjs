export const name="aq_indoor";
export const id="dl_0a1fc7205492ba532361";
export const url=new URL("../icons/aq_indoor.svg?v=58348d92dc8ecea77982f4289e4bf03452c1ae264245b167ea373b5fa1fa2110",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
