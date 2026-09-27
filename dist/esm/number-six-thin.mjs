export const name="number-six-thin";
export const id="dl_8c093ea27258478fa2cc";
export const url=new URL("../icons/number-six-thin.svg?v=07c9ecbab0f96caa8184283690ce0f77bedc0199adfb1d75d2784ed3bd775007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
