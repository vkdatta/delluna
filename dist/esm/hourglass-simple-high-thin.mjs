export const name="hourglass-simple-high-thin";
export const id="dl_235999113d4c4485a95c";
export const url=new URL("../icons/hourglass-simple-high-thin.svg?v=dc8e666265284e17c3be3f3985d612e0e50539ab40f99efde116959af53d434c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
