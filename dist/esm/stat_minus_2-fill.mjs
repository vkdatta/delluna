export const name="stat_minus_2-fill";
export const id="dl_7f9bc3b954afe5070676";
export const url=new URL("../icons/stat_minus_2-fill.svg?v=a5d8f69c212405181b9f52da72ad274f4a99f11dfa8e4a69c1d4c0d4a2c5a938",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
