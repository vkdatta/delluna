export const name="two_wheeler";
export const id="dl_3dbbcf1620029058cb64";
export const url=new URL("../icons/two_wheeler.svg?v=633cef9a82f460b2dacc94599567661ebe68a54585c8ecd15f0db0e1f38562fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
