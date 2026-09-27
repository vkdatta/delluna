export const name="flower-lotus-bold";
export const id="dl_d6e0b1ab35c34e789825";
export const url=new URL("../icons/flower-lotus-bold.svg?v=d8463a7e10667ea475ca44eca39a36104c512507bd17eae6a93a60511802c121",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
