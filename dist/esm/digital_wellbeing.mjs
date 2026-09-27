export const name="digital_wellbeing";
export const id="dl_1a87244d16bb03be7ed8";
export const url=new URL("../icons/digital_wellbeing.svg?v=8b5ce224495c808bb2c18e34bab83588ec2d72e9f9ae9cf182624ae3de48e6a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
