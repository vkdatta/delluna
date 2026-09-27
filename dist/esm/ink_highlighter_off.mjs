export const name="ink_highlighter_off";
export const id="dl_2dd00c9b666c02c923cd";
export const url=new URL("../icons/ink_highlighter_off.svg?v=6bae5ef8e15c1662390758a55bcd5b55abdc795096a757de05a5fb18cd8a9502",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
