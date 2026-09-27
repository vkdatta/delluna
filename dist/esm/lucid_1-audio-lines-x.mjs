export const name="lucid_1-audio-lines-x";
export const id="dl_ec9119c9bc7945cea63c";
export const url=new URL("../icons/lucid_1-audio-lines-x.svg?v=e661af077befe4eb671af03140e7c09f033c0a75f2f0f143dede248e06b10e50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
