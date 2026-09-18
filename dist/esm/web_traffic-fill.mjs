export const name="web_traffic-fill";
export const id="dl_6cba4224ae8d443db097";
export const url=new URL("../icons/W/web_traffic-fill.svg?v=a0abc0388aba26edfa4b3c99c152c68409e4a180d0c9d0189815aa4fe0f9034a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
