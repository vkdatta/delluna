export const name="twitch-logo";
export const id="dl_dcf5e2ed2eba47d6bc0e";
export const url=new URL("../icons/T/twitch-logo.svg?v=640f6ecfc394672ffdaeb2cc65c86cbdc27b3d846b8af090f5f28780142a6e8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
