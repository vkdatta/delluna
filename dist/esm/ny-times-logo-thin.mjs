export const name="ny-times-logo-thin";
export const id="dl_90f39f5cca2d4d0d8bea";
export const url=new URL("../icons/ny-times-logo-thin.svg?v=e2136da7565bccea0e2cde5c40ba68058fb779001d5563ce3e9ecfb534471f41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
