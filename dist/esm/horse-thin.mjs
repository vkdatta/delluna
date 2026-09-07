export const name="horse-thin";
export const id="dl_9e994a19339842ef8166";
export const url=new URL("../icons/horse-thin.svg?v=4ffcf7ba352049fc3b500db6b3e43fd07bbc3d2733501ba2840402dfae2bf748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
