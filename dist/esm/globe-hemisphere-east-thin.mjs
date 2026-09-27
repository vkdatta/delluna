export const name="globe-hemisphere-east-thin";
export const id="dl_3f0517d76c9845dcac80";
export const url=new URL("../icons/globe-hemisphere-east-thin.svg?v=e8cfa8d51e54a33454ee8173a3657aeebe8601100b022625f36ca64169a53b5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
