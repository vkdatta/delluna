export const name="lucid_2-fold-vertical";
export const id="dl_27c4017335a2481ba179";
export const url=new URL("../icons/lucid_2-fold-vertical.svg?v=63f31a4f8c24617be7150ab2c1d557ac9dabf55d2badc9d57d25679467163cb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
