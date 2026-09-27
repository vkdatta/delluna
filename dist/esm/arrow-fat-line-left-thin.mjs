export const name="arrow-fat-line-left-thin";
export const id="dl_34d756bcebb1403c8c52";
export const url=new URL("../icons/arrow-fat-line-left-thin.svg?v=184ccaf4e0101d5d34e951ab48da7d765c01ba298efdabf8bc8e7f0e9a0e3ae4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
