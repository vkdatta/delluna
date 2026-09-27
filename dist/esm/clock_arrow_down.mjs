export const name="clock_arrow_down";
export const id="dl_e6d584ddeec75621687c";
export const url=new URL("../icons/clock_arrow_down.svg?v=e48b6403873166ec843d4cebbcedf30dc8b4cf051f3c8f1137c134d97011ae81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
