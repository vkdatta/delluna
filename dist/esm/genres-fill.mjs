export const name="genres-fill";
export const id="dl_387dd985f7ef38a618f2";
export const url=new URL("../icons/genres-fill.svg?v=aa3fc9611ba13a0432516defef37cdc6353654506d55486a26b39d6bcc5b86ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
