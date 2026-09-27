export const name="virtual-reality-thin";
export const id="dl_4fd9f8a996f93f53b0cb";
export const url=new URL("../icons/virtual-reality-thin.svg?v=6733b8780570c545b7ba569a1096cf8d893fb792ab64fe7814d6ac485cc82ad4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
