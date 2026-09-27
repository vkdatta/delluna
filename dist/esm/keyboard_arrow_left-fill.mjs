export const name="keyboard_arrow_left-fill";
export const id="dl_ef8d812babd6a6fe0f61";
export const url=new URL("../icons/keyboard_arrow_left-fill.svg?v=8dd64c1feb432b4d3ae313ad7a15efcdb4988168dc924d409e94d5f8e6eb85ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
