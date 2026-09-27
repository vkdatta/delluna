export const name="arrow-elbow-down-right-bold";
export const id="dl_4a2235ef9c594465a38f";
export const url=new URL("../icons/arrow-elbow-down-right-bold.svg?v=4ebf1296b6d8a372d368e5ccd7ea62a9e62022e2d0ae3a64090fed43b30f9759",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
