export const name="siren_question";
export const id="dl_50d2663da2354cf6d791";
export const url=new URL("../icons/siren_question.svg?v=b5122804f97b3b4f67bf3643a9b3478d50982c8ac1a21348b352d25fa5668823",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
