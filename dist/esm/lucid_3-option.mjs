export const name="lucid_3-option";
export const id="dl_f249ae7d1c574c8fb6d1";
export const url=new URL("../icons/lucid_3-option.svg?v=ce260aaf938af00033da0523ea4ae248df370a4c4d9e3123a28fbae3f077930b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
