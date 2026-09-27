export const name="chess_bishop_2-fill";
export const id="dl_1167525f22cb56521078";
export const url=new URL("../icons/chess_bishop_2-fill.svg?v=c9cc48fb3ee68500a17dbf1fc56b5a0bfd3a46f33ee74fed41e2e2e18c1b9a8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
