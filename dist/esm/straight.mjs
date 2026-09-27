export const name="straight";
export const id="dl_cade6f8d730ca6588759";
export const url=new URL("../icons/straight.svg?v=b600f8d4a76377a325e6c300ba74fa32daa60cd356b1dd8b4ea92fa279e9ecf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
