export const name="co_present-fill";
export const id="dl_5b4e2147baa6ccdf4287";
export const url=new URL("../icons/co_present-fill.svg?v=745cf42a910fe367bb82579e434f80bacc9c26a06694b79482b85d90ddb36240",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
