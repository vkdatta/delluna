export const name="docs-fill";
export const id="dl_19662387eee046c3a083";
export const url=new URL("../icons/D/docs-fill.svg?v=fc48c51893404c14591c8e8e883534cd42e8eb94d13e43bc7cac1f2b5939e8a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
