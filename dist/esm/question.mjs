export const name="question";
export const id="dl_d9d2b78c05f942a3b6c2";
export const url=new URL("../icons/question.svg?v=12b3ae9137810db713b386c394801d64a573d99b8b4b60c1ca4900aa61efaa90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
