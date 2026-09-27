export const name="dog-light";
export const id="dl_e35c8fcda66f4ca38e58";
export const url=new URL("../icons/dog-light.svg?v=0c3afa4883c8d84ea48bb82b42ecf88eae0af91473ea47a5e2a5ef13811ff563",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
