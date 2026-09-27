export const name="stylus-fill";
export const id="dl_8d160363fc91abaa28fc";
export const url=new URL("../icons/stylus-fill.svg?v=4c05140aefb22e01629334db0588bfa526eb936b89e1328c6e00b59d8c441e26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
