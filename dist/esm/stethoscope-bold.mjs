export const name="stethoscope-bold";
export const id="dl_7e04bd18b945d869588b";
export const url=new URL("../icons/stethoscope-bold.svg?v=0cdae0830b039d91c61ebd6de4b4d5da0292452bf2aec4467470f3b1ca4ee37c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
