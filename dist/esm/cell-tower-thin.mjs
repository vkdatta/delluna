export const name="cell-tower-thin";
export const id="dl_ab59841681fe425db5ae";
export const url=new URL("../icons/cell-tower-thin.svg?v=f23645efa65af0a468933cbcd0618f4074378fad868c4307ebca282c840bc076",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
