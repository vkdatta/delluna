export const name="list-plus-light";
export const id="dl_58bb793a7e2647b5bdf8";
export const url=new URL("../icons/list-plus-light.svg?v=97fcf02ea205c683fe51dd00b929869601147ea0a1300149e095f243f24dd9cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
