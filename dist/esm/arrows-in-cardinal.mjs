export const name="arrows-in-cardinal";
export const id="dl_056c15b6c4fd42c89717";
export const url=new URL("../icons/arrows-in-cardinal.svg?v=9381b428c7ab15a13f171b9c43428130467adce7fac8b7ea04e0085730a9d248",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
