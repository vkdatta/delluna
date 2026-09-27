export const name="change_circle";
export const id="dl_1cc551d561c41837e59a";
export const url=new URL("../icons/change_circle.svg?v=b9f95d18d2420b7bd217878ecb909ed6915ac210508847c17d05164d095ce757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
