export const name="peace-thin";
export const id="dl_7514d244a004490fbc89";
export const url=new URL("../icons/peace-thin.svg?v=9f827640c4b0039fbc6203da003ccc9b3efd5f82f81c08d60909b271a179138a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
