export const name="headlights-bold";
export const id="dl_bfa1f1a520ac4f69ba8d";
export const url=new URL("../icons/headlights-bold.svg?v=caa03c4585e2965c771783a5e86c1e6455a51f688f4982631a688fb1b321925c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
