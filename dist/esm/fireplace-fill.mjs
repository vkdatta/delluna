export const name="fireplace-fill";
export const id="dl_00894183e6c871100dbd";
export const url=new URL("../icons/fireplace-fill.svg?v=6faf5ce34db28a5e5b03f4b6fa9f78cb6b48bfff66e28dc66411c25c89b24299",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
