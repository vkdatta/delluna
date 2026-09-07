export const name="seal";
export const id="dl_a0099aa2c6484b72bd07";
export const url=new URL("../icons/S/seal.svg?v=9f88778d8824961f4047ee00a953e12678fa60df2b4d7a35258edaaada014087",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
