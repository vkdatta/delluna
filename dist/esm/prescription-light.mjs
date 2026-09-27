export const name="prescription-light";
export const id="dl_d8483d69400946ad96c7";
export const url=new URL("../icons/prescription-light.svg?v=b07a01b435b31563ce2d4222066df89205dc93d23536ec5a8497e8e616f69942",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
