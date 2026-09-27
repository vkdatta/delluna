export const name="faders-bold";
export const id="dl_c7df18508a5a473dbf7b";
export const url=new URL("../icons/faders-bold.svg?v=86f6006501a633dfeea2e7a69b72459882866a996f8896fa3ffa800ca082fae0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
