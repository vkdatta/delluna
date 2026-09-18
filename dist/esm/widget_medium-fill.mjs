export const name="widget_medium-fill";
export const id="dl_42944fd6172240329678";
export const url=new URL("../icons/W/widget_medium-fill.svg?v=32f03454b73270c753e1eec8b0a25cd953a69cbc90f3fd2c0b3b7277c2d7bdc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
