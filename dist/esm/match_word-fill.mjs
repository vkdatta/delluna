export const name="match_word-fill";
export const id="dl_210d051035e1e7eb628c";
export const url=new URL("../icons/match_word-fill.svg?v=970aa2b9602804071451dd5ed68873fb98427d534e7ad13d0a6fa8491a0bdb18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
