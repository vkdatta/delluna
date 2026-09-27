export const name="paper-plane-right-bold";
export const id="dl_601be2e9bb51428ab3ce";
export const url=new URL("../icons/paper-plane-right-bold.svg?v=1190826dd047bfd182964e7053948816b181536b9e82d8b9d083018b40339fe3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
