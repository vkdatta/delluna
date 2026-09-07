export const name="seal-question-bold";
export const id="dl_5c58aac16eb042a1adf6";
export const url=new URL("../icons/S/seal-question-bold.svg?v=b74029d442f1e412395817d3270fc0206ee568df4ddab62f1ebad23a7b4c2adf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
