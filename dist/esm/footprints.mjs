export const name="footprints";
export const id="dl_b9918a78faaf483382ab";
export const url=new URL("../icons/footprints.svg?v=eed51ca4f2ddfc6dbf6a9adb6325424861ac8cf762dafebd5db5cc8153028893",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
