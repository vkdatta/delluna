export const name="lucid_1-brick-wall-shield";
export const id="dl_68ffe1d471634b47a1b7";
export const url=new URL("../icons/lucid_1-brick-wall-shield.svg?v=8b1912301aa068faea68e38270079f7e344d9b884f6bb903b19670344aabc46a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
