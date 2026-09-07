export const name="folder-star-duotone";
export const id="dl_859c8fc5925f4bb997d8";
export const url=new URL("../icons/folder-star-duotone.svg?v=35370f20bfc24cb710a59d0a08f09d5cbb022d8744456d53194b53cbd7ae9099",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
