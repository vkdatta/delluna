export const name="document";
export const id="dl_80b8940475aa49eeb5f2";
export const url=new URL("../icons/document.svg?v=c3ab2869f1795b36da9bb5d3f167e2926edb70345e0f862b51b35ec071bcbe9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
