export const name="camera_indoor";
export const id="dl_638c5dd105f52ee2254e";
export const url=new URL("../icons/camera_indoor.svg?v=23f8f5b55e91ff08deae41bb51c548310beb7c96377fd6319fbe602fdbbde849",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
