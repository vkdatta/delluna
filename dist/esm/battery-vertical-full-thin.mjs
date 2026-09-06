export const name="battery-vertical-full-thin";
export const id="dl_0c7915fc5d3f40f6ade5";
export const url=new URL("../icons/battery-vertical-full-thin.svg?v=7480ea29fa6e1eabecf4365548e6bd2d5cff48d8a9654c00825feeaaf21fcb15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
