export const name="planet-duotone";
export const id="dl_0d7ff7f61cf14d4086f2";
export const url=new URL("../icons/planet-duotone.svg?v=154c0409513cbc726e4b3c2bcb22eb168fe92b2dbdca9dc14d6faa66089cc11d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
