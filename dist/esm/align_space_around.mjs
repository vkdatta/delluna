export const name="align_space_around";
export const id="dl_59da79b55acc786f3160";
export const url=new URL("../icons/align_space_around.svg?v=4f3118c61a2b84bebb55186c097bf8b6726677081648fe904ee1c4838eb18722",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
