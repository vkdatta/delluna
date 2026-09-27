export const name="mobile_question";
export const id="dl_12dc1f5e91a5f81ff121";
export const url=new URL("../icons/mobile_question.svg?v=41f655fa20cf87f2c6bf4fa04b10ea5916c4568599be894da5aeb4b04f83b91e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
