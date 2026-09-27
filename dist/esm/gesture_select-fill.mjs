export const name="gesture_select-fill";
export const id="dl_5304d3146da94cf6ad12";
export const url=new URL("../icons/gesture_select-fill.svg?v=48098a22ae1981fa7834e5130ca906ada758065b2c87ad9b72618b20a24af01e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
