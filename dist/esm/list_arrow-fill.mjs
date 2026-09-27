export const name="list_arrow-fill";
export const id="dl_4cd0e40a402b2c775123";
export const url=new URL("../icons/list_arrow-fill.svg?v=52f25d72e8c2cb20ee368ab968fa39ba125268cb03edbbc75910176ede31da28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
