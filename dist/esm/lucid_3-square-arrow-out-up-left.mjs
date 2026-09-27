export const name="lucid_3-square-arrow-out-up-left";
export const id="dl_98205c7b82044495b083";
export const url=new URL("../icons/lucid_3-square-arrow-out-up-left.svg?v=0a37b494d8b6fda94e70d8dd7a21f9930a7614524fc9220162cd26135e4b997e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
