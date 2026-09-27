export const name="hdr_off_select-fill";
export const id="dl_b4730279a683378031ac";
export const url=new URL("../icons/hdr_off_select-fill.svg?v=a89dbefe50abbedd59b0dedf83e305188231437316618827f07baad6a4214678",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
