export const name="input-fill";
export const id="dl_ed25d3bb73a92ddad8e7";
export const url=new URL("../icons/input-fill.svg?v=bab76254e3c9347ab9a975de2c8fddcf67cead5fff2ffc754fa2881737015dca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
