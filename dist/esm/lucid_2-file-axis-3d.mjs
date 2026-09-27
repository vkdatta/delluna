export const name="lucid_2-file-axis-3d";
export const id="dl_95c826c565dd4c4b91ba";
export const url=new URL("../icons/lucid_2-file-axis-3d.svg?v=5cb00c20baedfbd6c8d9271380e65f6be4bb9d804b672df5853393892377f913",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
