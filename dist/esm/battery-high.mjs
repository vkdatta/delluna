export const name="battery-high";
export const id="dl_e9bad9aa085b457eb4ca";
export const url=new URL("../icons/battery-high.svg?v=0a7fed62f73682ed4f7ae8221dc9574a3f919c751177a6b7934d5aa07611623a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
