export const name="binary-duotone";
export const id="dl_7f1d9d6d73e0479ab4f0";
export const url=new URL("../icons/binary-duotone.svg?v=a96e78f6f32ae922601d09b3178ae09af449657097e582e0a8a7e2acb00a0700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
