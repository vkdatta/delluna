export const name="seal-fill";
export const id="dl_49e6610eef5f4ecd9015";
export const url=new URL("../icons/S/seal-fill.svg?v=815d2ed46a602145601ac932ad4ea452ee60841fc9f79dd2aa2248ea40b680f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
