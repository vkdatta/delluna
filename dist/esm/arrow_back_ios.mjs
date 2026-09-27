export const name="arrow_back_ios";
export const id="dl_514d3556560cace108a8";
export const url=new URL("../icons/arrow_back_ios.svg?v=d030710331708809dc69b4f96c8d26f20fad05ad5e18a194987c87fed0b79ac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
