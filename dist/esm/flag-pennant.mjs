export const name="flag-pennant";
export const id="dl_61fe040a7055474abab7";
export const url=new URL("../icons/flag-pennant.svg?v=1b687c5be0e597bc35e950edc21dced07a1ba647a604ca4cde01f2075fb2c237",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
