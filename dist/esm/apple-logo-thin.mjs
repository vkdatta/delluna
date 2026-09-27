export const name="apple-logo-thin";
export const id="dl_cf5cf50ad4dd4a2997d1";
export const url=new URL("../icons/apple-logo-thin.svg?v=472994d587798bcad87f3c8b9106ad4c9139229c9b2a7ee75abc9a39f2591508",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
