export const name="lucid_2-earth-lock";
export const id="dl_69f5703304dd4065979b";
export const url=new URL("../icons/lucid_2-earth-lock.svg?v=ac48fb7b3ada1163aebf78c7ccab0d20caa29c6c3475fbe1c5e28246dfe94be2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
