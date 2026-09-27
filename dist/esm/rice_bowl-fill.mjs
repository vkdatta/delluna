export const name="rice_bowl-fill";
export const id="dl_0f4b20c5cdd29ba5a03c";
export const url=new URL("../icons/rice_bowl-fill.svg?v=fb7c7576905d5ac9cd22870d59da66ce687587993f82978a5d958f300b7537a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
