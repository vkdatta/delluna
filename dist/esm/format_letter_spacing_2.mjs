export const name="format_letter_spacing_2";
export const id="dl_6cc93e7a63e309898a8a";
export const url=new URL("../icons/format_letter_spacing_2.svg?v=313037ece2ec88471fa899ee4fd57eb832c9619544e21cc7ada7b5641c6a4ac4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
