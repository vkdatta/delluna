export const name="arrow-fat-lines-left-fill";
export const id="dl_55004637893a465bb6da";
export const url=new URL("../icons/arrow-fat-lines-left-fill.svg?v=dc0c13f9b533dcef7460b3cd9043e3bb534ce468d04b7cdd6226440c9f9b97d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
