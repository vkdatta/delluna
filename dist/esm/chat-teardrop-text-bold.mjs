export const name="chat-teardrop-text-bold";
export const id="dl_fa1c2bd060314f8fbf31";
export const url=new URL("../icons/chat-teardrop-text-bold.svg?v=650640a0621776c8c5ae12a6d3e3e7325558ab04bb3689f1f8545b134379efcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
