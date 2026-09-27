export const name="glucose";
export const id="dl_ca7999c4311786a17010";
export const url=new URL("../icons/glucose.svg?v=6467c666e7af99f283f3c4042dd1ae690bd58e898c53e9b7d1c39194abd6f108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
