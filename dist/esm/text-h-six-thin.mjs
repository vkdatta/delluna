export const name="text-h-six-thin";
export const id="dl_8e6f102046974b44e24f";
export const url=new URL("../icons/text-h-six-thin.svg?v=83dfd0488c241455c6d20627b81978ad3a4f37e407a78f3d3db7f411f6fa64ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
