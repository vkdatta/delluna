export const name="hourglass-medium-bold";
export const id="dl_6b71dc028a2b46a19ca0";
export const url=new URL("../icons/hourglass-medium-bold.svg?v=3324c469a29c1b281571f1b5d8fa36e9de524ced3e1154229ea37d5b8e6a8e7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
