export const name="lucid_3-play-off";
export const id="dl_4d5795264b6f419eb15c";
export const url=new URL("../icons/lucid_3-play-off.svg?v=155bd8cd51e97cabddaf9bd7043772e78961607ac1a1caba58a9c1a0540538fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
