export const name="breakfast_dining";
export const id="dl_62623daa8efbb215a957";
export const url=new URL("../icons/breakfast_dining.svg?v=8355c4608f7eff4ca41eb7323800e5dedac149c1650b53e9b6382f860f5ccc23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
