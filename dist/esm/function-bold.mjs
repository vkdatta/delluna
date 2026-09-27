export const name="function-bold";
export const id="dl_a7f6cd1a572b47bbb17d";
export const url=new URL("../icons/function-bold.svg?v=f8729adfb4fd97022bfa35508dc1d50c8fa6425851bf73d2f655fba3334b8c18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
