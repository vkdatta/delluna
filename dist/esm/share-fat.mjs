export const name="share-fat";
export const id="dl_bc264cbf72ca7b46f9a8";
export const url=new URL("../icons/share-fat.svg?v=f87e96e9a49a59245b17a019104195c0cd578655438ad7d84043aa4354346081",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
