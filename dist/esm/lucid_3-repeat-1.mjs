export const name="lucid_3-repeat-1";
export const id="dl_722bc73e51424463afe8";
export const url=new URL("../icons/lucid_3-repeat-1.svg?v=a78e452364f199b69c066164867135e6fd3cd0c0faa5471247c2a213b299feb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
