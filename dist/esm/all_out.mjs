export const name="all_out";
export const id="dl_c892a4d50c0f80ceb86e";
export const url=new URL("../icons/all_out.svg?v=4c0572488b578a7464a5571f031138811f3e79581ff3055d7a89db4e54d6fa0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
