export const name="arrow-elbow-left-up-thin";
export const id="dl_12a3106582bd45e0893a";
export const url=new URL("../icons/arrow-elbow-left-up-thin.svg?v=6e3b355c4b7df11a06a75863976dd5a585973d61bb50fc3bb1999b1b5b7f003c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
