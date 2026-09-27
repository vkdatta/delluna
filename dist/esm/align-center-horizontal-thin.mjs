export const name="align-center-horizontal-thin";
export const id="dl_50e921f2747d41969f4e";
export const url=new URL("../icons/align-center-horizontal-thin.svg?v=c66e926ad32db17f83da7fc7ab11479b8459fde4e4a2e9d01edc9a157484ff1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
