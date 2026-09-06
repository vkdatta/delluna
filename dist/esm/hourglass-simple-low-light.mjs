export const name="hourglass-simple-low-light";
export const id="dl_14f149e97e1746e1a7fc";
export const url=new URL("../icons/hourglass-simple-low-light.svg?v=a8c0acab8e23181bd3001ea02b4bffa7ad3a1d33c71a928d1fea52f9a838e270",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
