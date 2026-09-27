export const name="play-thin";
export const id="dl_8cfbb08d3f604e439b9c";
export const url=new URL("../icons/play-thin.svg?v=651445991af1140ee5ffe86e14ee85b8e92383b6dbf97b616069a1d87f4fa585",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
