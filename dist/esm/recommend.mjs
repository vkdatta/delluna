export const name="recommend";
export const id="dl_626d2cb212b5297742d8";
export const url=new URL("../icons/recommend.svg?v=6c86327976627a4ac295bd15498c26af3202182b81c12324743c81e429743cdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
