export const name="wallet-light";
export const id="dl_2e5555489acf4b978a05";
export const url=new URL("../icons/W/wallet-light.svg?v=675f9c58f9b4f7f68abfce811a012db4b8da40d55ad0c6c643c042c762cdcbd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
