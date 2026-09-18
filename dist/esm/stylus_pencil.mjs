export const name="stylus_pencil";
export const id="dl_dcd3094cd1a340a59e83";
export const url=new URL("../icons/stylus_pencil.svg?v=46289b3656d9885ca389dfa4db89886cc7a7c76f7fe25c0abfce1e6839830df3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
