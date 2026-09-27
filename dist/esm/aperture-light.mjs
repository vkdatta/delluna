export const name="aperture-light";
export const id="dl_7ba7952fb27c4e998b18";
export const url=new URL("../icons/aperture-light.svg?v=651b2699a52ed61f2a9e30637d7e3799e723fc9b8cc0af1ffad564c63d6cfc73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
