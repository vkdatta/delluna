export const name="upload_2";
export const id="dl_89b0aacd78e2afe84630";
export const url=new URL("../icons/upload_2.svg?v=be8c6924c6a65782f6316523b1e61ea1e351d1cfb494a9463ec6131ade33a2ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
