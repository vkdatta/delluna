export const name="hand_meal-fill";
export const id="dl_e3ae672943a4619cd8fd";
export const url=new URL("../icons/hand_meal-fill.svg?v=cea62b9c608d94a63c2ab29f8f89c9b975717138c24e0df66b23e73473d236c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
