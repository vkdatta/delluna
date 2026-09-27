export const name="view_quilt-fill";
export const id="dl_87b68e36867454af967f";
export const url=new URL("../icons/view_quilt-fill.svg?v=d1501e86254d8fcbd121f76c4b5ed667aa5f67426d70f5680a9b7151b07049e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
