export const name="design_services";
export const id="dl_6aaaa385d3aa4f51aa3a";
export const url=new URL("../icons/design_services.svg?v=0cc76b3ec4228b41c25ccec899c071ec9da6bbd4852fb583b8d1ebfc5b410cea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
