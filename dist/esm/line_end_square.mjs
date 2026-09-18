export const name="line_end_square";
export const id="dl_0d2f735ef2eb4bd7a4fb";
export const url=new URL("../icons/line_end_square.svg?v=07ecf4fcc78ab3ec8292c5d1d5ae2b02a1bdffc86670b43546793dd5986e30b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
