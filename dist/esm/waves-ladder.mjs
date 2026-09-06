export const name="waves-ladder";
export const id="dl_13529ff48cd94e9d894c";
export const url=new URL("../icons/waves-ladder.svg?v=cc91c1c873f27a409507a5f40aeebe8dd382903a491363a8b54103ec99f21e2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
