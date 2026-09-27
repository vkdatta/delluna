export const name="lucid_3-panel-left-right-dashed";
export const id="dl_638bab184b6847b6988e";
export const url=new URL("../icons/lucid_3-panel-left-right-dashed.svg?v=385d696d4cdea37adcf174ba5290497c389a9ff9e9a71cbada099029d0c465e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
