export const name="arrow-elbow-down-left-light";
export const id="dl_1c718e6a60c64d0a97fc";
export const url=new URL("../icons/arrow-elbow-down-left-light.svg?v=4b0778037719fa8d9190bad7012e86fa3560cd752a37ba73809bf0c4b3e740d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
