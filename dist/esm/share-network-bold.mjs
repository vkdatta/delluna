export const name="share-network-bold";
export const id="dl_6977dbacd7a24d1f86e3";
export const url=new URL("../icons/S/share-network-bold.svg?v=519afbbc535df7d5cf7ebe8bd771b1714937bf17493ec7fea74c8205f1c868f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
