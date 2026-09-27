export const name="video-camera-thin";
export const id="dl_0fecd122d89b7c96564e";
export const url=new URL("../icons/video-camera-thin.svg?v=89f8d798182f731574c738e19294fd2276968fc8cb0a74387b6b47e265a8240a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
