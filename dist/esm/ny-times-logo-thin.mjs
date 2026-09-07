export const name="ny-times-logo-thin";
export const id="dl_90f39f5cca2d4d0d8bea";
export const url=new URL("../icons/ny-times-logo-thin.svg?v=bee62c24ae9c1269c524bc00a30fb8993ed8f2f2d3e1a95f547e2e9de89285f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
