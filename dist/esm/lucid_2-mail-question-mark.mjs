export const name="lucid_2-mail-question-mark";
export const id="dl_d1292fb549c4463c91e3";
export const url=new URL("../icons/lucid_2-mail-question-mark.svg?v=d432a44d87cb85f988938e32e181c7927a97616c7dd2f8b047baa614d0d5ce98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
