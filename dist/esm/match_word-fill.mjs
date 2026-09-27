export const name="match_word-fill";
export const id="dl_8c5b56640cd67ca5e7cd";
export const url=new URL("../icons/match_word-fill.svg?v=8b0ca9af7913ccf88ae189dbaef9aa52992d8770bddd7868ce8fa68c48a56711",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
