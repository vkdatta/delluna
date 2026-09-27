export const name="question-bold";
export const id="dl_b8a1a9e7b9884df5b462";
export const url=new URL("../icons/question-bold.svg?v=10df78fac496747e6df27f17b3f9dbb83ffd097aa9e6fdf3b5312c776630a8da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
