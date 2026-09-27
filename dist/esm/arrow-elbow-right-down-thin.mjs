export const name="arrow-elbow-right-down-thin";
export const id="dl_c6f0ed3cbf2d4c1cba71";
export const url=new URL("../icons/arrow-elbow-right-down-thin.svg?v=b90bcddbf1c0d7054098518b19d834e5a6f648e160453813fcbf20b19bd1a7c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
