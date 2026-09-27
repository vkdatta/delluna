export const name="robot";
export const id="dl_0bbca5a74eb74bea8276";
export const url=new URL("../icons/robot.svg?v=02fb65ff0d02945d68157bae125837f15ec51b2115c7110aaa3b6bb31d2f95d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
