export const name="yarn-bold";
export const id="dl_b485d2d8880148b2ac21";
export const url=new URL("../icons/Y/yarn-bold.svg?v=3a0a0d64f9f0765135b8a5426a6f2709df00ff2d9522b3fc144b9074aac086b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
