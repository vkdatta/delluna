export const name="question_mark-fill";
export const id="dl_3309edc60b908067ce40";
export const url=new URL("../icons/question_mark-fill.svg?v=231fefa3b7bbbbf6cd1828ba0b83c792ecd52dde599ecba8d067f410ed58b74e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
