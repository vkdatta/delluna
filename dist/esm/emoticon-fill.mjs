export const name="emoticon-fill";
export const id="dl_290fc3dfe2c744208abe";
export const url=new URL("../icons/emoticon-fill.svg?v=53a03d9af27989d1f9e121794328fa0dad20ec60e92a21a757a13d10189b08f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
