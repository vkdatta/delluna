export const name="nest_wifi_point";
export const id="dl_e0f41f4d36e74f2ea05b";
export const url=new URL("../icons/nest_wifi_point.svg?v=c66e18c0b54056ebf290bdf8351041c0b6ad5c168ef1d5718594045c75e4bfc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
