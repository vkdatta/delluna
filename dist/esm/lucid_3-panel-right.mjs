export const name="lucid_3-panel-right";
export const id="dl_ed19e1b7dcd245858b0a";
export const url=new URL("../icons/lucid_3-panel-right.svg?v=831b0af13969a209ff41eef6dd9fefc343f26eb4cd70396eb34aa7a15c2edc1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
