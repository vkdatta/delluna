export const name="repeat-light";
export const id="dl_13d4d64dac034f478a5d";
export const url=new URL("../icons/repeat-light.svg?v=4def72e6773f131eb292f885f661d05e88962962ca7de866490450667296f6ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
