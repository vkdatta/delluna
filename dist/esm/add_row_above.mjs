export const name="add_row_above";
export const id="dl_565c6c812d54ecc6eaaf";
export const url=new URL("../icons/add_row_above.svg?v=c6900f85ba7d08667d1a4f31917e142a4f4b06edc7763d3f7b1a679d4e8e00e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
