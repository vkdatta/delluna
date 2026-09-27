export const name="tote-simple-bold";
export const id="dl_f8500f8b232d75c13d6f";
export const url=new URL("../icons/tote-simple-bold.svg?v=98353e61b1fa3de684aa06eb8b177d27a8040a2fb43c04340523af074d626c4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
