export const name="lightning-a";
export const id="dl_8bb1c0c28fb7416d90da";
export const url=new URL("../icons/lightning-a.svg?v=50e59341f1be690d280718d218473d0675e56b07e506d35fea13a2a258d046cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
