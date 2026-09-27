export const name="lucid_1-command";
export const id="dl_13a166a7c6ad4e109925";
export const url=new URL("../icons/lucid_1-command.svg?v=cd4aeac2ea174031f15b87cb484e4f1ae3c5eb336d3d7048adcbbaef6b49e12d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
