export const name="snowshoeing-fill";
export const id="dl_34990391cea6dd61b00e";
export const url=new URL("../icons/snowshoeing-fill.svg?v=f2d2ae867c3983399c95432b3c59cd224bce3fe4641d8b5fc7ad20c284a5e4ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
