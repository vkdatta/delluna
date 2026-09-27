export const name="ear-fill";
export const id="dl_3a54e1ba5fc44414acb7";
export const url=new URL("../icons/ear-fill.svg?v=81f132db233fead1ff7a1d34c29a02a17d70497fa2cd89218fdfbad6d43b04bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
