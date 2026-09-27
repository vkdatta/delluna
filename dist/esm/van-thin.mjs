export const name="van-thin";
export const id="dl_aee470c96e065f0785ec";
export const url=new URL("../icons/van-thin.svg?v=cc7f8e6b2f18025db0fb2c57de22dfb7771097126df407979a96eec6c29b33f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
