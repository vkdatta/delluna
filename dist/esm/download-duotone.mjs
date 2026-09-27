export const name="download-duotone";
export const id="dl_db313af344cd477d8386";
export const url=new URL("../icons/download-duotone.svg?v=5996754d12a90e6c40807eae785c43a2f964aa49227843d0340d10e1f7283bf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
