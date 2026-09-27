export const name="diamond-bold";
export const id="dl_431456d387984ac0a9bc";
export const url=new URL("../icons/diamond-bold.svg?v=10b22fafddb13b6ea1ab2cf039b74d087fd2fa09f1e3b67d5ebe67f3d3aa9a18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
