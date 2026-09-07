export const name="download-bold";
export const id="dl_0865be2bae4d4d049d56";
export const url=new URL("../icons/download-bold.svg?v=41f872f1cac1fb46700030a066bb8e1266712309daa64289ba968137f6041bfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
