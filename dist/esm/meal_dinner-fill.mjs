export const name="meal_dinner-fill";
export const id="dl_293ebec12e8ab51057dd";
export const url=new URL("../icons/meal_dinner-fill.svg?v=e3f8ccab0758d911b11debff64cf68cd2dc2cb6a3ae658c153f771b4bd4c1148",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
