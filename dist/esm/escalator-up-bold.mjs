export const name="escalator-up-bold";
export const id="dl_42cb4903f6af4d61bb3d";
export const url=new URL("../icons/escalator-up-bold.svg?v=94b56c27cd64e82d35c7436369814b013b2bf79d0eb267c8ee67276b860e986a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
