export const name="arrow-elbow-up-right-bold";
export const id="dl_b354424976e64e78b80b";
export const url=new URL("../icons/arrow-elbow-up-right-bold.svg?v=aba0a27078e33af5c6a0f1b77dfa50d3d48b64b2290e3d725c7ea86eb42d4be7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
