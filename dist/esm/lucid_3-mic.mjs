export const name="lucid_3-mic";
export const id="dl_aebfb823f9234c09bf8e";
export const url=new URL("../icons/lucid_3-mic.svg?v=5975fff2ec04cc88794029f682a1475e24a7ade1ae19cce374571bb245bf0977",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
