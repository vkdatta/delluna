export const name="pencil-simple-slash-bold";
export const id="dl_1940dd3a90c94c4d941c";
export const url=new URL("../icons/pencil-simple-slash-bold.svg?v=3d3b2a0ee93715927d6dd94d21d8b6da62e840f14d0297c2bdad2107937feeac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
