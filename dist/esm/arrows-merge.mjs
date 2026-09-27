export const name="arrows-merge";
export const id="dl_7443ac29581d49ed940b";
export const url=new URL("../icons/arrows-merge.svg?v=76f1d2ac9cd6edf61d0650246c1c4e784b4058c6c031d07f599f917b6e42b972",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
