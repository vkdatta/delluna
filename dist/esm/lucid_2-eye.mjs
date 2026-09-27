export const name="lucid_2-eye";
export const id="dl_77f70c206c6a472e80a5";
export const url=new URL("../icons/lucid_2-eye.svg?v=93252b5508dc7e2c3c19fa596316f76a6d5a273ebc2127c477488fa5aa599eb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
