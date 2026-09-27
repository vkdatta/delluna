export const name="caret-up-down-light";
export const id="dl_800bf3cc4de849978d13";
export const url=new URL("../icons/caret-up-down-light.svg?v=cafa2021778c09de935c203ae8743b04ff60c8b0146f71c7a4cdd9114010de63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
