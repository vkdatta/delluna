export const name="heartbeat-light";
export const id="dl_a45d6bf403004922843c";
export const url=new URL("../icons/heartbeat-light.svg?v=4ec3c911866a19f38082c6d5a39bcb95ddf8d88909960909cebcbe97e711cf43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
