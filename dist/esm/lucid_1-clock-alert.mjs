export const name="lucid_1-clock-alert";
export const id="dl_fdd2d21248fe4457a855";
export const url=new URL("../icons/lucid_1-clock-alert.svg?v=a000dcda0d42530c6005eb0fe8506b409fe4cbbc8d19fbbe69ec6ee05cc264a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
