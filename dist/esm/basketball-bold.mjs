export const name="basketball-bold";
export const id="dl_da092d36578c49808329";
export const url=new URL("../icons/basketball-bold.svg?v=f75d37f52040d9fd3c50fe8399e3a4505b38481308e5dfb17e89f401cf308174",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
