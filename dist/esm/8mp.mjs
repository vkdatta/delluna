export const name="8mp";
export const id="dl_b2aa18e6b4c47e94e79a";
export const url=new URL("../icons/8mp.svg?v=3868925f1e0ff9f9076fedc3f1badf605a58bd44f1b661999573de3f0025fb1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
