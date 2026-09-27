export const name="zodiac-virgo";
export const id="dl_60a37129485a4571b8dd";
export const url=new URL("../icons/zodiac-virgo.svg?v=233753eb884a51404ce3fe2c9ef942111dafb0af77bc3afd28591b134192e26f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
