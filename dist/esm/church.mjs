export const name="church";
export const id="dl_92754887f5dde06e4ec8";
export const url=new URL("../icons/church.svg?v=259c969481dddced7b44af57c9b230aecabb9a2491349f27621dd7fb7a34f2e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
