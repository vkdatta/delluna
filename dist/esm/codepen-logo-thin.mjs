export const name="codepen-logo-thin";
export const id="dl_fed36a5c991c4be29785";
export const url=new URL("../icons/codepen-logo-thin.svg?v=0e55c4c1336222f63ef44a432d6f66aaa7e800bae7a4cd52f14e1829209bbd82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
