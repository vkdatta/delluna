export const name="chevron_line_up";
export const id="dl_cc29e41a8229458b8a47";
export const url=new URL("../icons/chevron_line_up.svg?v=d64f4f19c635c7e7e38fa0bef297d694705caf520491942385f936bc2ee064a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
