export const name="square-parking";
export const id="dl_171a3e7863f24ede8f19";
export const url=new URL("../icons/square-parking.svg?v=432ee398f09a85e94d8cbb09c04a4e30c3e79fd6b86f2f897df1549e10579efa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
