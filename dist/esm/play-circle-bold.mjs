export const name="play-circle-bold";
export const id="dl_d973819eb96541028341";
export const url=new URL("../icons/play-circle-bold.svg?v=acbfe549c2a428d87e70d49090f8a2eb68cb34781c86fba31bf4bcc02151dcab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
