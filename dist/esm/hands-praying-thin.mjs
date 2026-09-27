export const name="hands-praying-thin";
export const id="dl_583220ff35b445558afe";
export const url=new URL("../icons/hands-praying-thin.svg?v=643b6bb0748f05df66cbee1c165a7df1f46483664317f8de2f1411a177f30824",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
