export const name="article_shortcut";
export const id="dl_d4f82747318841df8da7";
export const url=new URL("../icons/article_shortcut.svg?v=94f5f61cc1628d4a5b8d2c8d926dceedbce8317b0508ee0084f116332b498b7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
