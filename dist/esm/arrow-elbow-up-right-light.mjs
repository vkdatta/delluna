export const name="arrow-elbow-up-right-light";
export const id="dl_1013cdff7ea2486d9837";
export const url=new URL("../icons/arrow-elbow-up-right-light.svg?v=5d85f1e91d1105b34f7a8060dedd6b4bdb0c2bbd927a31971336f418138a71f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
