export const name="lucid_3-monitor-smartphone";
export const id="dl_c86bd0bb90fb48f197eb";
export const url=new URL("../icons/lucid_3-monitor-smartphone.svg?v=8a78344e0401e853412deb774e3e6285ea40708dc5dada66514d7837e33c819e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
