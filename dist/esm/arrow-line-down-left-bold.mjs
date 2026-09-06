export const name="arrow-line-down-left-bold";
export const id="dl_3d457d9a154c4d68bec7";
export const url=new URL("../icons/arrow-line-down-left-bold.svg?v=e7cd57df97e9d151143893ffe55a413330722366e6cc1d9b21880b3872820d8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
