export const name="star-fill";
export const id="dl_5933e10f99bb4e119688";
export const url=new URL("../icons/S/star-fill.svg?v=42451b34121b695bdaab88fdcf3eacec9cda9ac36d222349609426dcb9f04b48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
