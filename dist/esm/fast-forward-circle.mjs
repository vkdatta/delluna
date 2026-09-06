export const name="fast-forward-circle";
export const id="dl_9e5faadf48334db1a03b";
export const url=new URL("../icons/fast-forward-circle.svg?v=aaed249b621fa03730721e0f7f116bad2e05046c90f9525dc4433258e1d9ed12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
