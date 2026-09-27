export const name="arrow-elbow-down-right-thin";
export const id="dl_bfbf953780de4a92a3d2";
export const url=new URL("../icons/arrow-elbow-down-right-thin.svg?v=a8ff8f7e1f133f1f015d31ada52408a44b1b4ee76b590dd101568f4ac9189e53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
