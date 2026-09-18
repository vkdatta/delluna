export const name="id_card_2-fill";
export const id="dl_17e56d34870141f2ae2a";
export const url=new URL("../icons/id_card_2-fill.svg?v=74ae6f88d8cadba88084268545d6cca46601101ab27f525b75a53a8f44fecbe2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
