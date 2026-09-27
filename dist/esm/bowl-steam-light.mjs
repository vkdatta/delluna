export const name="bowl-steam-light";
export const id="dl_fbfb86fbdccd4ecdaac8";
export const url=new URL("../icons/bowl-steam-light.svg?v=e44e246ee281e254470762a87d14927a6c8800a9c50dd35cba23ee90a8f08e6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
