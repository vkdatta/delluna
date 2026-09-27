export const name="highlighter-circle-light";
export const id="dl_b0feae7dc841494589f8";
export const url=new URL("../icons/highlighter-circle-light.svg?v=fcc5f290f994c897938da86906258903049ae0dd4a1e23c963534a6f50a23bd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
