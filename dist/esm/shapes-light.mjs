export const name="shapes-light";
export const id="dl_65ce35a923e94169955d";
export const url=new URL("../icons/S/shapes-light.svg?v=eb0557007d87fa1f1b8800a322fea07d28d95ff1615350fe543aa81e23b7e22b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
