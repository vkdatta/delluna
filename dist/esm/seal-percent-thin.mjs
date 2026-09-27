export const name="seal-percent-thin";
export const id="dl_ef69e1959ac707beab26";
export const url=new URL("../icons/seal-percent-thin.svg?v=59dd50bac26ca03d16f1d344ca7e0b36deb7a02bce73150ab0e36232d38b2862",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
