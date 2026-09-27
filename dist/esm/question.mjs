export const name="question";
export const id="dl_d9d2b78c05f942a3b6c2";
export const url=new URL("../icons/question.svg?v=15df4affc702a2db153c1cdbd9ffc53f72016996c9c4ef1929d1cae4a5ed1809",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
