export const name="play-pause-light";
export const id="dl_27942ddab8bf4bdf9b08";
export const url=new URL("../icons/play-pause-light.svg?v=4f364de1acfae4b745a94979c44718458a107001639255f7b0115c073d534b39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
