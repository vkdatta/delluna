export const name="lucid_2-grid-3x2";
export const id="dl_fc74f1ed62ab444da7cb";
export const url=new URL("../icons/lucid_2-grid-3x2.svg?v=3ba6324f805a600ea4841f96bd40de44ddf1bacb7e58b1edaf5110e7b6273791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
