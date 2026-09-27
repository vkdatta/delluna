export const name="format_overline-fill";
export const id="dl_318c54f23d4d5fa96f81";
export const url=new URL("../icons/format_overline-fill.svg?v=deb6b05676ecbbfc3780de11d42ebf8295a8e0686145d4e0f5a33beec755f1a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
