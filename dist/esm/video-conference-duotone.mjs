export const name="video-conference-duotone";
export const id="dl_e6c27415910c9e74ee44";
export const url=new URL("../icons/video-conference-duotone.svg?v=de33639939d28f4de7c5e712b56762a836360e9d0986c24b3e64b1f1ff7e18ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
