export const name="hand-peace-fill";
export const id="dl_9fe9598e64a7455ba53c";
export const url=new URL("../icons/hand-peace-fill.svg?v=a8b73be1fd8d29c86d943ba1a3c13b68d1b925dc4cc8031dd5bf2730b5fce156",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
