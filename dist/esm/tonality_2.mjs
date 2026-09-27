export const name="tonality_2";
export const id="dl_6ca7531325cce451325d";
export const url=new URL("../icons/tonality_2.svg?v=d2a033fc6f8010576002a016d18c3bb6e4d42ed4e49d748a923f3f433faccd1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
