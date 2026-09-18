export const name="sports_football-fill";
export const id="dl_111cf2107b0e4da3bcfa";
export const url=new URL("../icons/sports_football-fill.svg?v=41b0fc7cff28c073c598cff2acc896b8e3c878f5e4b26cbe7ec0eea578c005d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
