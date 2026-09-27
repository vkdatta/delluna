export const name="arrow-arc-left-light";
export const id="dl_5d9633013b7142508d15";
export const url=new URL("../icons/arrow-arc-left-light.svg?v=8db76f07f1d9637946341fb845990ce948870590b8b469571cdf7b8c469717b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
