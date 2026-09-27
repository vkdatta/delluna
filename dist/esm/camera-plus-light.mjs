export const name="camera-plus-light";
export const id="dl_eb643187cb6e4b6d90a8";
export const url=new URL("../icons/camera-plus-light.svg?v=51b33614988185a9c152a61b95517af06973b721ce1c33cea1ef93c699edbdd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
