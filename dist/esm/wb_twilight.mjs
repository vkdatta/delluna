export const name="wb_twilight";
export const id="dl_f4715774f7c1426aa460";
export const url=new URL("../icons/wb_twilight.svg?v=8cff9101169259e5a7d69bd24d167b3e2e48eda274b0ceefbfebca6376692b98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
