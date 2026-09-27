export const name="record-duotone";
export const id="dl_90e29d56a281442aa8e3";
export const url=new URL("../icons/record-duotone.svg?v=893ff74d310e5d2828a84420c549fd2dfd83f43a1961d322fdc1419434d45550",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
