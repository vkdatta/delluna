export const name="magic-wand-light";
export const id="dl_3f40f4d2e26e481ba198";
export const url=new URL("../icons/magic-wand-light.svg?v=6b2db79f302188d3d4cf440c71a728db36ebf4b435c8ee706ac7ac6d804f6846",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
