export const name="medium-logo-thin";
export const id="dl_c6c3f1d69c6d41debd7c";
export const url=new URL("../icons/medium-logo-thin.svg?v=7c9d3a7aa4572b8ad3c858dff3294c86c6676e9d7b6c59be6af5b611b5d94850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
