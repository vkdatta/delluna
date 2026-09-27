export const name="lucid_3-shield-question-mark";
export const id="dl_e8d66761ce6a40fe8a4e";
export const url=new URL("../icons/lucid_3-shield-question-mark.svg?v=2150538204c2d776fae273895f6aa3ec1f78c2f44d31d707637db827a7529778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
