export const name="video";
export const id="dl_5944b522f0b848b18b94";
export const url=new URL("../icons/video.svg?v=28cb97c96d2b13c4b97e2e62b0980ba15e4ec103617be0dae9be5a2342194c93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
