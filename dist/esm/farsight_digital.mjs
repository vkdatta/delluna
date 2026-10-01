export const name="farsight_digital";
export const id="dl_26d8b7b9db8fc59eb373";
export const url=new URL("../icons/farsight_digital.svg?v=6796d4cb995dce6e89679e4f2665893b433eb3d0d3408efbca6be66d77ce7850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
