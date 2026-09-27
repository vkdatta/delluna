export const name="shuffle-bold";
export const id="dl_c6b86211d8ffe3efab5d";
export const url=new URL("../icons/shuffle-bold.svg?v=163990428cbf54c068e1d7bc8094c9e468a3855a6429268720e3b58492ccf9de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
