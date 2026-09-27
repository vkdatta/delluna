export const name="north_west-fill";
export const id="dl_e22dd8cf701809395d95";
export const url=new URL("../icons/north_west-fill.svg?v=10405fe62f39bc860b908ea7f9abac173bfe7a5384fd1d29262a76436de6072d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
