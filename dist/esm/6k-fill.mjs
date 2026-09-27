export const name="6k-fill";
export const id="dl_3566245cb40e75451b77";
export const url=new URL("../icons/6k-fill.svg?v=da94c4dc4302dcf9a2c11ee896c0bb0a04a05236d98df409848ba47f5100c4fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
