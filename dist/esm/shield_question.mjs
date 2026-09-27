export const name="shield_question";
export const id="dl_38f3ff47da5a31f6c1c0";
export const url=new URL("../icons/shield_question.svg?v=4764c8270edc3183af81e7235e301e82306498f5ff790a723f3ef19df638f45f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
