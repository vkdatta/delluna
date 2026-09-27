export const name="cursor-click-bold";
export const id="dl_9956ee124b7c42fcaebc";
export const url=new URL("../icons/cursor-click-bold.svg?v=ae898fb5d5790e8c2983515dc2ca0c97ace765d7c0073f2ed21b59f714ff7658",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
