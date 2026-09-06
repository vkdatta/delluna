export const name="lucid_1-arrow-down-left";
export const id="dl_a309679dc48a4faea337";
export const url=new URL("../icons/lucid_1-arrow-down-left.svg?v=043dd7b29907c14dc5eb5b90130b79c3ab63e8b13d9eb8d499203d231c50ee3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
