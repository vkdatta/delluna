export const name="court-basketball-bold";
export const id="dl_bfb705b1bc0c4fefbdc1";
export const url=new URL("../icons/court-basketball-bold.svg?v=46ccef67fc84c8e7de69b65e8aa8dff71b40bfff38d221171656e6e6a8035aaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
