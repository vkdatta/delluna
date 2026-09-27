export const name="hand-palm-light";
export const id="dl_4cef4361dee445e78c08";
export const url=new URL("../icons/hand-palm-light.svg?v=8a35742b36e8500ae7c64620c094d3eb8a9779a623de8e7049481712ed2750b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
