export const name="arrow-line-left-light";
export const id="dl_c13c957894f84b9ea331";
export const url=new URL("../icons/arrow-line-left-light.svg?v=c5a373501ed7b0fbaeba1faf7536fb16e168223807f839d85d22cd2f82349827",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
