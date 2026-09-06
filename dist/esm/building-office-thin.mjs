export const name="building-office-thin";
export const id="dl_05914abe3986405dbfa7";
export const url=new URL("../icons/building-office-thin.svg?v=70335a0ccfb86ea03fd047c56456d498971ed29c42e5077271a614016d5a7e1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
