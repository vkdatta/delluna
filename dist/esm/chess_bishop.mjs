export const name="chess_bishop";
export const id="dl_a9357dc384554abc8081";
export const url=new URL("../icons/chess_bishop.svg?v=7053fb6a7c77f4255493de4012e201208698345d29cbf6ca858460319ad68211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
