export const name="vignette-bold";
export const id="dl_d888bc17e5dd41eb8e7c";
export const url=new URL("../icons/vignette-bold.svg?v=704d00bc421b55c829f060a53062443e4af47156bf044c0f77b20e68417bfc49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
