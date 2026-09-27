export const name="arrow-circle-right-light";
export const id="dl_1baff6154ff04e749f1f";
export const url=new URL("../icons/arrow-circle-right-light.svg?v=a39399183cc12417217bbd7a581c28a9a6624a0481dff86a892b972ffe5a7a52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
