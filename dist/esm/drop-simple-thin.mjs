export const name="drop-simple-thin";
export const id="dl_1808ca0c88754f3c8d21";
export const url=new URL("../icons/drop-simple-thin.svg?v=ac70142cd05b3d9fb402d190e9e9daae26ea92d726b610835bf398a36203e9b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
