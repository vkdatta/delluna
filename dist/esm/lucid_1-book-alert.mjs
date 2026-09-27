export const name="lucid_1-book-alert";
export const id="dl_7ad09abb75204bf4b514";
export const url=new URL("../icons/lucid_1-book-alert.svg?v=0b3b2e1e92e26a7e2c520da670fd2f862634b620df912f687822bbd68854d2b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
