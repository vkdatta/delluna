export const name="line_start_square";
export const id="dl_1a8265c0fc8f6495db70";
export const url=new URL("../icons/line_start_square.svg?v=22485e3ec7c98c6939f97661c5416d2ba793fc45c5fe9789dd74e1a88f4b683c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
