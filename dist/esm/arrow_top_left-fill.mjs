export const name="arrow_top_left-fill";
export const id="dl_022d0738e310713fe8b4";
export const url=new URL("../icons/arrow_top_left-fill.svg?v=2cc4b7736617fcbb0fd9b198458de69ca73608e27875f9f60d07c3f26bd04fe3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
