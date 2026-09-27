export const name="bluetooth-connected-bold";
export const id="dl_3ea0c7ea119247568471";
export const url=new URL("../icons/bluetooth-connected-bold.svg?v=6d1558f10871d670d78b8403041c53bbff6f7b894ec1c9f1ed5d0a0a5c63c982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
