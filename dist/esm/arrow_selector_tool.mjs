export const name="arrow_selector_tool";
export const id="dl_a78d57aa800164a7fe9c";
export const url=new URL("../icons/arrow_selector_tool.svg?v=668e7dfb1743667b81d2edb0ebda7695b0041789c0c1ff2724f13c849d28ed53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
