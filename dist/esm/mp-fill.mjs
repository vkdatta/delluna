export const name="mp-fill";
export const id="dl_715e99d7a9914cbf97d6";
export const url=new URL("../icons/M/mp-fill.svg?v=a5290d2fc97da98a1155f15dd08439406bf0d370240f3c6cd10168a949cc7bda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
