export const name="arrow-circle-up-left-fill";
export const id="dl_d80d3141f87e4565be43";
export const url=new URL("../icons/arrow-circle-up-left-fill.svg?v=ff1f10b06f8d80e6b8bae3a95c33e0bfd2438f406e8363638a6338c704d237b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
