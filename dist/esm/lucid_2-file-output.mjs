export const name="lucid_2-file-output";
export const id="dl_c6308cfab302497e87b0";
export const url=new URL("../icons/lucid_2-file-output.svg?v=6a2247b5de75889530a56c6830fa75e6fa294ddad6f13d7880206a124b5ee1d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
