export const name="lucid_3-monitor-pause";
export const id="dl_5bf65c55f50445b5adbd";
export const url=new URL("../icons/lucid_3-monitor-pause.svg?v=7a210352e953ae143ac8a8465bcdffeadf20cc549be2376548104731b09a4fbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
