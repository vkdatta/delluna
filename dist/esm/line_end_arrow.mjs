export const name="line_end_arrow";
export const id="dl_02103e0c72e567547a9f";
export const url=new URL("../icons/line_end_arrow.svg?v=9f6f1061854ee5fcdba81eb958a918aca38aace0ded8fc0dfd348004cb95326f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
