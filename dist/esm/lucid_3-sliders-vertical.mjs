export const name="lucid_3-sliders-vertical";
export const id="dl_da942087129b419a81a4";
export const url=new URL("../icons/lucid_3-sliders-vertical.svg?v=0caab3790ed634d91cffcfa2e2b2ebc5ab6345c6961d5bcdd5a768b0d55b8b45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
