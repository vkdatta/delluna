export const name="arrow-elbow-down-right-thin";
export const id="dl_bfbf953780de4a92a3d2";
export const url=new URL("../icons/arrow-elbow-down-right-thin.svg?v=3a933117a0af7e3dfba0a5bdff318e38c10336c08124131a30645526a1376efd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
