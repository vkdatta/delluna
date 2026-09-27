export const name="user-sound";
export const id="dl_8b381a422d8f1c752c18";
export const url=new URL("../icons/user-sound.svg?v=45ddc096f148437e12c5c7356c71de8aecdc893db60f99bc0c825cc6e38bfee1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
