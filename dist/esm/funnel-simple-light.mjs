export const name="funnel-simple-light";
export const id="dl_d37f9116094a4fa1ab52";
export const url=new URL("../icons/funnel-simple-light.svg?v=91052379a87394a9bb1bce96d3badb0f8c546ede95d5e454bb56cec62d171e36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
