export const name="asclepius-duotone";
export const id="dl_c188202c88b44549bb34";
export const url=new URL("../icons/asclepius-duotone.svg?v=973725b6c558e64676632b5882fb9ea92368dab71cf9fff1e900aacb9027c1e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
