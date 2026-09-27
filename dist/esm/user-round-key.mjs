export const name="user-round-key";
export const id="dl_fe4d5d0045d64fd9a895";
export const url=new URL("../icons/user-round-key.svg?v=5037a6ee76c62d83be66e38097b24cf42e8b36a0610711dab4a64639b4c13d42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
