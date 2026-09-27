export const name="high-heel";
export const id="dl_98f9bbc7f5414283b56b";
export const url=new URL("../icons/high-heel.svg?v=97c5d49368923511ff3171aae74cf5aa2ff342a27dd94892e938f2603c1d3082",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
