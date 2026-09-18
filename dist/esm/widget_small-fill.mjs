export const name="widget_small-fill";
export const id="dl_42da9323227946b49f91";
export const url=new URL("../icons/widget_small-fill.svg?v=f4d49f66476b68c52c17e5b23cea469e53f4fa50e2bf444f1de42eabdf70f52d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
