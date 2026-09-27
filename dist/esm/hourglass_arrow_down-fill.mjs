export const name="hourglass_arrow_down-fill";
export const id="dl_3333fbf3a2a8a29a81ac";
export const url=new URL("../icons/hourglass_arrow_down-fill.svg?v=8e9dc96a662fa9d0721b570954cc48ab9b8ce7add46cb9fd8873027bf0b071a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
