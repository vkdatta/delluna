export const name="virtual-reality-light";
export const id="dl_0d3d0feac04c8f5b62aa";
export const url=new URL("../icons/virtual-reality-light.svg?v=e2e3a2217bdfa453ddfa5994b1084bb59799a08a99365ba8d754a12a5008cb92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
