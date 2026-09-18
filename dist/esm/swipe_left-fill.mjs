export const name="swipe_left-fill";
export const id="dl_ed68374c1751400abb7a";
export const url=new URL("../icons/swipe_left-fill.svg?v=055458ded82edde93aba4600e707f1929f3ead942b45a445776a8b1321b756dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
