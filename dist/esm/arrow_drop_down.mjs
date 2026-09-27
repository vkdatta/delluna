export const name="arrow_drop_down";
export const id="dl_074029dc232433121766";
export const url=new URL("../icons/arrow_drop_down.svg?v=aba620ac7161970aa6b8a8d22a5e68fddedd6377900f29b5639c9229a6c022f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
