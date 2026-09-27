export const name="traffic-sign-duotone";
export const id="dl_5d75d84626ea5e3d6739";
export const url=new URL("../icons/traffic-sign-duotone.svg?v=46310be864ba0af0d142295dc2f39c0abaa43b380a355207ba0b86a9e3b38bd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
