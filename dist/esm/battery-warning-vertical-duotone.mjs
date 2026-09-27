export const name="battery-warning-vertical-duotone";
export const id="dl_2bfe88e3ec104e58bb38";
export const url=new URL("../icons/battery-warning-vertical-duotone.svg?v=4b67415b3863205576e636b3cdec7dce610ea56387c450dd22e02d1c85a28f78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
