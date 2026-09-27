export const name="traffic-signal-fill";
export const id="dl_d9d7a42b0a9885b4066c";
export const url=new URL("../icons/traffic-signal-fill.svg?v=d5468230a364ebf743ac4ba5777adc6b09a495f03ae1eae733b83eea4335b4c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
