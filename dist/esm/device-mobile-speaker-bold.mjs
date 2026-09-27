export const name="device-mobile-speaker-bold";
export const id="dl_2b473192fd7245d68463";
export const url=new URL("../icons/device-mobile-speaker-bold.svg?v=e533c0d2bd9e0cd2e85f5201330f8b75cbfdbab18bad66f5a04246f69a21e054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
