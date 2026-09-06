export const name="lucid_1-book-check";
export const id="dl_7bd0554bb2124a53ab22";
export const url=new URL("../icons/lucid_1-book-check.svg?v=1e27bb0bb66f6e2b61b330eef33dfc8dca230127f8e13470c9d42442b5d27575",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
