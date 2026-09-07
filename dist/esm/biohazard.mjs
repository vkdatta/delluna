export const name="biohazard";
export const id="dl_a0d50eb0c8ee4a2cbdee";
export const url=new URL("../icons/biohazard.svg?v=64e89f25d9399e895a46a58558237a61d26007806adf9b714c4799fa6d66bc82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
