export const name="display_external_input";
export const id="dl_2a039a86c1ebbaa22bf9";
export const url=new URL("../icons/display_external_input.svg?v=daf3bd834aa19d9a24f7d0a6781b681bc6b3c01a5a15823660809436ce7e1064",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
