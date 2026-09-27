export const name="videocam";
export const id="dl_f0ac3ce9fffd80a02fca";
export const url=new URL("../icons/videocam.svg?v=d1ab843500e9b48a28c15ae2e3626ebec426e677ae9eabbd20c907217c9b03c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
