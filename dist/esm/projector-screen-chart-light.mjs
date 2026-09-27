export const name="projector-screen-chart-light";
export const id="dl_1fbf2c5722f8493b8aa9";
export const url=new URL("../icons/projector-screen-chart-light.svg?v=52953c6de876341602a7ae80ab4e2960797f795bf9c5cf01fdab2fa4b7946a20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
