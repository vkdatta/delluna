export const name="deployed_code_account-fill";
export const id="dl_cebc3aa9d2d94420867a";
export const url=new URL("../icons/deployed_code_account-fill.svg?v=b4c21aadd0469cb6c17a87818dc8a2f1a87610aa68b4b29d4fed32d156bfae93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
