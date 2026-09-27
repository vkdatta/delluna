export const name="highlight-fill";
export const id="dl_97a21bfde8cf59172b79";
export const url=new URL("../icons/highlight-fill.svg?v=5738b61b3d74d9594a87a66b2eb7ebdbf040fa6f09640963297a92cb61be595e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
