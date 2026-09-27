export const name="mic_double";
export const id="dl_862b011eba64e285281a";
export const url=new URL("../icons/mic_double.svg?v=08743817840afd43bd04416c4fd0f8c4559098136e9579754be4a5632aac83ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
