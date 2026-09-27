export const name="lucid_3-space";
export const id="dl_2ef440957c074b359e00";
export const url=new URL("../icons/lucid_3-space.svg?v=8f57c7466bc31e32096f112d5039dc796345a8ac6307405109aac2f32866eeb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
