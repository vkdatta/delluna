export const name="nest_hello_doorbell";
export const id="dl_f9ae16ed8851bbb438c5";
export const url=new URL("../icons/nest_hello_doorbell.svg?v=e16ca37082a24100257cf2dac5a456a54eb5a9d5e922f95e623a5e04f4b0fab8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
