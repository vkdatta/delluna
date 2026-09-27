export const name="check_circle_unread";
export const id="dl_97e07a10d7c0e1b460cf";
export const url=new URL("../icons/check_circle_unread.svg?v=74febb8382dcad845ea67926493f580d711d591388d211b4077c1ea11e32f378",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
