export const name="other_admission";
export const id="dl_def04d346b30480b919a";
export const url=new URL("../icons/O/other_admission.svg?v=a88f61c3451cc2b753e643bcd4333ea7e2c00b37433acedf56e74fa713459ebb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
