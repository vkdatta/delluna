export const name="coin-vertical-light";
export const id="dl_afd2f66cb99e4ed59f08";
export const url=new URL("../icons/coin-vertical-light.svg?v=c3ebde53499d6085ed109bb0c750a64e42acee1f3fe5e08aa14a35a439fadcf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
