export const name="barn-duotone";
export const id="dl_cd18ef14b6164dc384fa";
export const url=new URL("../icons/barn-duotone.svg?v=d94d2e79f5dc22f501cf894dde6250d684a19fef6b95d766e37b3a277b76106b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
