export const name="diversity_2";
export const id="dl_c848725c1d7657cdb581";
export const url=new URL("../icons/diversity_2.svg?v=b969aa92d3160295e857d2b404b590afe58aaf08c5db28e83b21615fe1d2fb56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
