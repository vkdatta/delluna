export const name="hand-tap-bold";
export const id="dl_363a103e1cba469abbf9";
export const url=new URL("../icons/hand-tap-bold.svg?v=ce89809cc5fc0e0ed63df50b839d0e6e236d0718019d54cb3749255108502fd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
