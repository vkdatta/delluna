export const name="battery-high";
export const id="dl_e9bad9aa085b457eb4ca";
export const url=new URL("../icons/battery-high.svg?v=5b712daf6fc1c8cf3885f03cf497b4ba1cbd588376b97668d59f09f4f7c928f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
