export const name="battery_android_question";
export const id="dl_0ba56a3b942199ad239f";
export const url=new URL("../icons/battery_android_question.svg?v=8a790ab11cdac57a3d72fd04c0f123e79fb5d63782bacd8914744ba1a3747d2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
