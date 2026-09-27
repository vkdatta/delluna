export const name="copyright-thin";
export const id="dl_a6850129784347318a72";
export const url=new URL("../icons/copyright-thin.svg?v=e0b6b79e247e29217219b770aff73de3a3abd1a4f83a987368454d8364389ddf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
