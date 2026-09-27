export const name="dice-six-thin";
export const id="dl_bc97ef9adaf84ed584a0";
export const url=new URL("../icons/dice-six-thin.svg?v=bd344883443d586f7fa9121842c3969b571ac90394bfaf201df2aa029280c900",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
