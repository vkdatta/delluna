export const name="warning-octagon-bold";
export const id="dl_7443ce521b133cb2b4c5";
export const url=new URL("../icons/warning-octagon-bold.svg?v=922e89e2eda05469f326558a9bcb5236a862a9dfd78df464d507f9c31304564c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
