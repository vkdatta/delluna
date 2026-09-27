export const name="hd";
export const id="dl_bdbc6bdb319daeef06d9";
export const url=new URL("../icons/hd.svg?v=bef5e952659793e47a7eece4ea2a76832570542908d024ab593c94f74814b9ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
