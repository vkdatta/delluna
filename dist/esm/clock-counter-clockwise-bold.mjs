export const name="clock-counter-clockwise-bold";
export const id="dl_c9fa4409abb2421c838a";
export const url=new URL("../icons/clock-counter-clockwise-bold.svg?v=dea67a02f38b4f17e6c23143b4d2daa7f417714585450a32dbc2a8bcc98485a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
