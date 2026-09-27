export const name="star-minus";
export const id="dl_2f6c318776704efc8630";
export const url=new URL("../icons/star-minus.svg?v=53d1b1181048c4fa8ba93a8cb592f36cbedea964f52edcef400254add88d51c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
