export const name="stone";
export const id="dl_eec09a76f12344688ccc";
export const url=new URL("../icons/stone.svg?v=fae58dad0029dfc0cdea4ba932dadfe5e7b47be17e9cc9a3b7bfd25e813d20e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
