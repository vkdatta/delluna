export const name="skillet_cooktop";
export const id="dl_a29bbb93bbb609a33d62";
export const url=new URL("../icons/skillet_cooktop.svg?v=9e8441df1f85498863a4471ee35aac1aa74e52c03770241b9bf5424a6e7fa5a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
