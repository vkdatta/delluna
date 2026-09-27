export const name="arrows-left-right-bold";
export const id="dl_244de3c1526a4caf9229";
export const url=new URL("../icons/arrows-left-right-bold.svg?v=9b807bd1060873eaac1965f372d2fe53de41676ad6dc3ec6cb0bfc3bca7c20fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
