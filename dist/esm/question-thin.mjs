export const name="question-thin";
export const id="dl_d0c925129b5741778310";
export const url=new URL("../icons/question-thin.svg?v=4b446745887bf91da0fcb5f721ef76ff1c9ff99d5fa5bd78e14a178b7140be25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
