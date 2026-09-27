export const name="camera-slash-light";
export const id="dl_9aa98c5aca734b6ba2ed";
export const url=new URL("../icons/camera-slash-light.svg?v=47d66163553e2d192a9989fde8a26404c1d1a3dfded48931708ea655b972a3cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
