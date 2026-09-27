export const name="garage-duotone";
export const id="dl_3eb41562cc854e6a9183";
export const url=new URL("../icons/garage-duotone.svg?v=cf33cfe904e72d1fc7a9831b15e7ed419a700062ce2a59092dafeef530143728",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
