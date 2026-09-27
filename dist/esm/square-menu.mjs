export const name="square-menu";
export const id="dl_38f3f36c38d14cfdb300";
export const url=new URL("../icons/square-menu.svg?v=1f37b134bda65c727fa1ed4aae803010030e1996d6359bd0d109769ed641c8f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
