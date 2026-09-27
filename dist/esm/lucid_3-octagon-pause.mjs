export const name="lucid_3-octagon-pause";
export const id="dl_07d9e5076b7f49b5abec";
export const url=new URL("../icons/lucid_3-octagon-pause.svg?v=9a26fe25e4458e30388637c612b947785f9849f6905908378d74c3360ecc65e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
