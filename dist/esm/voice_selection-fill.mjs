export const name="voice_selection-fill";
export const id="dl_32f8f496e4b34e418c15";
export const url=new URL("../icons/V/voice_selection-fill.svg?v=8324324170f4ef5c16cce5f3ddcfa1a17ad8ee85088e9be7915d9a36dcc1c537",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
