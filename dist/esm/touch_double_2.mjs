export const name="touch_double_2";
export const id="dl_18bd1cecf99bae4596a0";
export const url=new URL("../icons/touch_double_2.svg?v=31b2a4629adf1ba4b8701b5f2797f520bb21f0f1daf0a8d87229f4057b16667c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
