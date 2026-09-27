export const name="grid-four-bold";
export const id="dl_c4e77bc9c3aa467e8a2a";
export const url=new URL("../icons/grid-four-bold.svg?v=04cd6ca626ecbd91cdeaf0f590d462ff439c4d05335e0a3901bb5c34b5c506a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
