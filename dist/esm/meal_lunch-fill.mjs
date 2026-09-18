export const name="meal_lunch-fill";
export const id="dl_a65491ab5f544468b9f2";
export const url=new URL("../icons/meal_lunch-fill.svg?v=d6bab379b6684235a1887eb3a685309140ec57235faf087d6e1ba914978b0d70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
