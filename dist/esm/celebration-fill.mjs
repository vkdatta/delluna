export const name="celebration-fill";
export const id="dl_5d7cf5ab7b5741b0bf56";
export const url=new URL("../icons/celebration-fill.svg?v=ff79b73b22f100a2ffc7273a51a46df2f53bf71f3fb78ce695a828bf99d314cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
