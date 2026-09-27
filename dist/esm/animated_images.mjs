export const name="animated_images";
export const id="dl_9aac087d3528f2e77dc5";
export const url=new URL("../icons/animated_images.svg?v=c5ad3ede6366207b7142cec5b4e87ff7ff75ed431a2eab11da77b1450a00c479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
