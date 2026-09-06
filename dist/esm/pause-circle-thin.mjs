export const name="pause-circle-thin";
export const id="dl_d07df6fd29b045768fe4";
export const url=new URL("../icons/pause-circle-thin.svg?v=39fd1415eabe4a565d55e67e0a12379dd57610ba412d4af5caf8fc90720601f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
