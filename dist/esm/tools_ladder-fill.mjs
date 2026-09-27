export const name="tools_ladder-fill";
export const id="dl_5c510e71b5b719450e52";
export const url=new URL("../icons/tools_ladder-fill.svg?v=3958faadce464e4ae8893633ee549261e697eba7177d679fd54cd3ee97cc6cd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
