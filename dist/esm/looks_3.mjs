export const name="looks_3";
export const id="dl_7feb30fe7aed762e2713";
export const url=new URL("../icons/looks_3.svg?v=484994bfe1abe96fc1717ffe338aea4ed1e69ee5fc2d5ae5de5972c2e9a91958",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
