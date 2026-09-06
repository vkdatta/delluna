export const name="waves-arrow-up";
export const id="dl_f7b314b76ef0489b8e5c";
export const url=new URL("../icons/waves-arrow-up.svg?v=f788ec72a214939d9d3314f653346df23ff013f21428140af59f976a9a48af4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
