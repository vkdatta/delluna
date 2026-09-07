export const name="video-conference-light";
export const id="dl_3126c39027504756b4cf";
export const url=new URL("../icons/V/video-conference-light.svg?v=38aae32ae0a01c0ab06c4144cb0e9acc2e8581a4907da156e82c045e1e117a6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
