export const name="pace-fill";
export const id="dl_a811c6fe5534177af717";
export const url=new URL("../icons/pace-fill.svg?v=ab00bc0b267f91fa0214335967813b4adf0554e4cfef4fbd4ea5c3df7e1f692e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
