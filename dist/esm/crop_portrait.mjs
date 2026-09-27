export const name="crop_portrait";
export const id="dl_ca692263e22767880268";
export const url=new URL("../icons/crop_portrait.svg?v=72f10fd2dade37316fcd0cffe49633b54d0519c1281c449ad4e984eb914bd865",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
