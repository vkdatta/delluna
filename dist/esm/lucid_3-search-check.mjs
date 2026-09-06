export const name="lucid_3-search-check";
export const id="dl_9c821b2da72d40a4b00f";
export const url=new URL("../icons/lucid_3-search-check.svg?v=3fecd5262bcea79cf06e47d819bbcc325272282b4458fe0f24f9a596c42ad47b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
