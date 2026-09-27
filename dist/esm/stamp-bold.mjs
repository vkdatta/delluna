export const name="stamp-bold";
export const id="dl_e6eeaf9608b42068c7b4";
export const url=new URL("../icons/stamp-bold.svg?v=d1e89ad9831c7e41233b0293e5a75a62ce4afcfde933adac83d7e8409ae737d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
