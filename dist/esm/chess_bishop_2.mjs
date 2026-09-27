export const name="chess_bishop_2";
export const id="dl_ed39d91944c8462cf720";
export const url=new URL("../icons/chess_bishop_2.svg?v=b03713279459ce5d46a0689c56a356bb9f4fdae35ed223378a0b1997009434b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
