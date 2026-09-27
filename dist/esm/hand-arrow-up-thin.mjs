export const name="hand-arrow-up-thin";
export const id="dl_452bb059daa241d089e8";
export const url=new URL("../icons/hand-arrow-up-thin.svg?v=53f8cb47aaf47aed1b593e8e6eca215998849b049d511a38d4759bdee5838b58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
