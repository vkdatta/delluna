export const name="north-fill";
export const id="dl_c05b07ceabede481c358";
export const url=new URL("../icons/north-fill.svg?v=959f00d6c2cdb6008e1c90da1633c4404b53ca2981675a85d4aec044a39b7b31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
