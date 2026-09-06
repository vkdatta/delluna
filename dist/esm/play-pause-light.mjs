export const name="play-pause-light";
export const id="dl_27942ddab8bf4bdf9b08";
export const url=new URL("../icons/play-pause-light.svg?v=ee7649613a74c2ca5821f2876034ebc18cba6893fbdee3e96352fb7bc4586657",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
