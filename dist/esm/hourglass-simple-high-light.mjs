export const name="hourglass-simple-high-light";
export const id="dl_94fb14a7c77f401d81f8";
export const url=new URL("../icons/hourglass-simple-high-light.svg?v=012cbf67483a6a0a0675f739c05d118ee8076101c68a0eb21b7a44958559307d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
