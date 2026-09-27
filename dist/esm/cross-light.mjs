export const name="cross-light";
export const id="dl_c1336cbb4c464429b8b1";
export const url=new URL("../icons/cross-light.svg?v=f36cccf94f07912182d0baae56f60862dc7b8c60c0dfb485fbfa01bc16eb06b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
