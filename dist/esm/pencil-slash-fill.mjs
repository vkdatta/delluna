export const name="pencil-slash-fill";
export const id="dl_2077a51c4b044a468f96";
export const url=new URL("../icons/pencil-slash-fill.svg?v=ff6b919159478480fe77f7c5b0307ee406dae423f2d1c05aba8c8f2d5288e341",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
