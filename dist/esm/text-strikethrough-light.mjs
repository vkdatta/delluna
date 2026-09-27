export const name="text-strikethrough-light";
export const id="dl_0744bece8a618e943bd3";
export const url=new URL("../icons/text-strikethrough-light.svg?v=0e94a6297f6aac3c227d36d4948c0fac7daafe31e118dfc4b3c20ebce4b20ac4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
