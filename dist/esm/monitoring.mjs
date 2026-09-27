export const name="monitoring";
export const id="dl_a06f2a7610b55fc1b29b";
export const url=new URL("../icons/monitoring.svg?v=99d837d7d3ca5659ac2e33bd4acd05755445107ae01ab1d07cf8954f793eabfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
