export const name="tick";
export const id="dl_57f503dee03c4a4aac79";
export const url=new URL("../icons/tick.svg?v=1f50b97d7e935160b015a9373cabc6330738634187293afe4193f54f4492476a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
