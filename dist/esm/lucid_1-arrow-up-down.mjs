export const name="lucid_1-arrow-up-down";
export const id="dl_8ee503819d104e9e8572";
export const url=new URL("../icons/lucid_1-arrow-up-down.svg?v=23f24371ea2ff078da754a9e268f386f7cdaa40bfc519052a9c1367ddb76526f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
