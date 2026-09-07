export const name="smiley-bold";
export const id="dl_d97aadf3efe6474b84fa";
export const url=new URL("../icons/S/smiley-bold.svg?v=4a0c410bbee53d46da10a79bf0d5d0b57a6694bdbfe169ff4c25101734444520",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
