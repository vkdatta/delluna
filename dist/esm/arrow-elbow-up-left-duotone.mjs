export const name="arrow-elbow-up-left-duotone";
export const id="dl_35df16d18cf74764ac1a";
export const url=new URL("../icons/arrow-elbow-up-left-duotone.svg?v=2020f3399b30b1923503aae95aa1101b13b20a48a726d19cbc94193fe91959a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
