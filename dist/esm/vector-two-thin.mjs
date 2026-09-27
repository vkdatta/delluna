export const name="vector-two-thin";
export const id="dl_09d38248988b86af480b";
export const url=new URL("../icons/vector-two-thin.svg?v=48582db3d7422d194ab3aa9555dad198fb605af581c618ebf3aed151ac903bf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
