export const name="potted-plant-light";
export const id="dl_9a2014f2a86d46ecbbf0";
export const url=new URL("../icons/potted-plant-light.svg?v=371ad3fe722fd9e77baaf437fafeebf299a6a1c5d077f5a9674bf8367a717614",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
