export const name="file-py-fill";
export const id="dl_8a61360a25cc4b45a9aa";
export const url=new URL("../icons/file-py-fill.svg?v=989c2272b1ac08fb03038e617cf8c44fc6722c3fb31c22685e68777fb7b9005c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
