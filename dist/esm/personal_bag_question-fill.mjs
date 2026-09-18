export const name="personal_bag_question-fill";
export const id="dl_7714618688334a52b784";
export const url=new URL("../icons/personal_bag_question-fill.svg?v=af3e72150889cdfb32be8cca90b5005fbd8e52e325a3cfd5c9359cb10b77ba4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
