export const name="zodiac-virgo";
export const id="dl_60a37129485a4571b8dd";
export const url=new URL("../icons/zodiac-virgo.svg?v=5f39c779bc8c2ad1ed7dd3c0b43377624a480c9730832d366ec4ebd993f0aaa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
