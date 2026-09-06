export const name="person-simple-tai-chi-duotone";
export const id="dl_145ef324112f4701acee";
export const url=new URL("../icons/person-simple-tai-chi-duotone.svg?v=6397558e94994116c45c930da3cc4751f6940ea6c848a3398abf1d40f98fd27b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
