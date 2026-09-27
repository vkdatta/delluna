export const name="nest_mini-fill";
export const id="dl_4be1353e6b1a08843efb";
export const url=new URL("../icons/nest_mini-fill.svg?v=c78744774635aab45138ee20478b4dc28e4a31e85ea80f4841fc204279721d46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
