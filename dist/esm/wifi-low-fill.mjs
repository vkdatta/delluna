export const name="wifi-low-fill";
export const id="dl_054c3e4cbedb133ff9bb";
export const url=new URL("../icons/wifi-low-fill.svg?v=977359b88e7ed5c1052ca4711437c96ec597d83746c073784199c1f7bc7fbdc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
