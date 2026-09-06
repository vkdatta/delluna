export const name="fast-forward";
export const id="dl_93eebfb1a432477b8c25";
export const url=new URL("../icons/fast-forward.svg?v=81893a7203a6ff8ea2ff8fb294413ed5bc059ade85e141cc547ae61f1b9eb667",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
