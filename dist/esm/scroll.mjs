export const name="scroll";
export const id="dl_76d3922a757be827ba27";
export const url=new URL("../icons/scroll.svg?v=d3036d00d10d5d4aab5466ed881b46f79af38f72d49ebfdc1f4eb0ac8eeabbf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
