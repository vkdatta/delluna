export const name="hourglass-high-fill";
export const id="dl_01eecd5bb5e6463889e0";
export const url=new URL("../icons/hourglass-high-fill.svg?v=dd0382e59f6dc375927c0b61904a76094d23a16f26de8ac558e035cf222c307d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
