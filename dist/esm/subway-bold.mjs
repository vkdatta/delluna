export const name="subway-bold";
export const id="dl_b5c6dd71e8337fbeaa60";
export const url=new URL("../icons/subway-bold.svg?v=98c3c7fdb0e4368a4b6a80431ddbad032e7687807926d06e32cae238c5e92c62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
