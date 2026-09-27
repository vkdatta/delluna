export const name="align-center-vertical-simple-thin";
export const id="dl_8de8cefc20b2430d9b35";
export const url=new URL("../icons/align-center-vertical-simple-thin.svg?v=ca8e51b65af330da3a03d3e0961c7f8a73e514c2e3bdf2334a77430b6a23bba9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
