export const name="equalizer-fill";
export const id="dl_75a40964da1b4adfb918";
export const url=new URL("../icons/equalizer-fill.svg?v=6c2fa09a7e9d67e8f839e64ca1d520091de9f050e3193f477967325dc39066f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
