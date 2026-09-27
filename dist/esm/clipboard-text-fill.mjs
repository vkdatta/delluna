export const name="clipboard-text-fill";
export const id="dl_7af3792f92a443f08b90";
export const url=new URL("../icons/clipboard-text-fill.svg?v=c52a4c086aad5bbb63545b494e4992980396fbfbc5e820812229692da46f15a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
