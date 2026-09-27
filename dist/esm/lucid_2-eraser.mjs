export const name="lucid_2-eraser";
export const id="dl_61c57c16789845489ea9";
export const url=new URL("../icons/lucid_2-eraser.svg?v=330d31c388a258a24cfd9d1cbffc4a6d9b12c1ca4f70c61ff379fb6021acd4e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
