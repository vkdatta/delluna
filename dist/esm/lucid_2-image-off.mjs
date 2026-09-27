export const name="lucid_2-image-off";
export const id="dl_387ec51e79c04a178b24";
export const url=new URL("../icons/lucid_2-image-off.svg?v=dab47d6186abf057dfddce4520d523019a17a6cb032c36e8fe8afad39e664f5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
