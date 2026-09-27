export const name="pipe-wrench-thin";
export const id="dl_4e0e81eb13984d3384b5";
export const url=new URL("../icons/pipe-wrench-thin.svg?v=33e33308dcc54d7845b5209f073602a644ed6467dfabcbadef669c7e594c916b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
