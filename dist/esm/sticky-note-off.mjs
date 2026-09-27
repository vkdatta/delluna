export const name="sticky-note-off";
export const id="dl_dac9e818b1254961b7db";
export const url=new URL("../icons/sticky-note-off.svg?v=45d23e0afa3bd570d8eb9ed6e0922e82cb4549c6d5323740ea8f51183462d045",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
