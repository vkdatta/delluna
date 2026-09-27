export const name="circles-three-plus-thin";
export const id="dl_0df3c54eeb2841ff8713";
export const url=new URL("../icons/circles-three-plus-thin.svg?v=d1de906871a2e87c7731c6f0728d32bfe05bc6b87b2c8eca704c5795cc08ddf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
