export const name="insert_text-fill";
export const id="dl_c38ede6348ee48f6b86c";
export const url=new URL("../icons/insert_text-fill.svg?v=e9bee019691f74e888051a6569c9bd52e2cdb0d4f92900adfa9fb92e3abce62f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
