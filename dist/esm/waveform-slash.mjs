export const name="waveform-slash";
export const id="dl_7fd90fb4eeff489f80bb";
export const url=new URL("../icons/W/waveform-slash.svg?v=dfb593371d557d2ec8253b6286694dd27c9579e765a97b1a4fa46fc86c9c0090",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
