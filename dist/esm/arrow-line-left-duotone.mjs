export const name="arrow-line-left-duotone";
export const id="dl_8627da9054a34f49bfbd";
export const url=new URL("../icons/arrow-line-left-duotone.svg?v=11207a85cf56aeb8910661c46ad8b9c3b56724d4fc5cee7104d8fb2f4a226c8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
