export const name="arrow-fat-lines-down-fill";
export const id="dl_0cc59d3f68074393bca2";
export const url=new URL("../icons/arrow-fat-lines-down-fill.svg?v=6b621da17877c022c8dbed4f0a23fcfee3f8a227ac071290e13c446071d4b990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
