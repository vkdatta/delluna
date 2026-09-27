export const name="calculator-duotone";
export const id="dl_0448a2bf88974f828dce";
export const url=new URL("../icons/calculator-duotone.svg?v=3c640240a15cebcec83ff46d8b67c91cedd494ec8215823975f74691144d810e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
