export const name="heart";
export const id="dl_39b3883f822f44a6912d";
export const url=new URL("../icons/heart.svg?v=634a55580fc6cd4298d4dc64f700c85580ba5f9d2e2094c4508d3d6b3af59f39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
