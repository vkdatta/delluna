export const name="chess_bishop_2-fill";
export const id="dl_c229b590288940109f19";
export const url=new URL("../icons/chess_bishop_2-fill.svg?v=d79ca9df065e0ec37a5bfd3e85ded1d4965299552bccac0fd434f137fcc0e852",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
