export const name="t-shirt-thin";
export const id="dl_e1b02fa291a72ee3a804";
export const url=new URL("../icons/t-shirt-thin.svg?v=5b0c41eb93920a37ab852ce7195495156c11e79fe7915ae595ab6481fe0324ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
