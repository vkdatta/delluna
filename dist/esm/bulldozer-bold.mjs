export const name="bulldozer-bold";
export const id="dl_ae3b5d027d73497da149";
export const url=new URL("../icons/bulldozer-bold.svg?v=0dd72ed33202ceae4ca85290838051ca960a7132abfbd2d279ba7be032dde5aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
