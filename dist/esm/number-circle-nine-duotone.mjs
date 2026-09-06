export const name="number-circle-nine-duotone";
export const id="dl_e3f1c8f882274225a24b";
export const url=new URL("../icons/number-circle-nine-duotone.svg?v=021e10b30cfefd81e6114b15389d6bad34f52a6e1faf62c4889ef0ba969b3e34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
