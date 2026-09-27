export const name="radio-button";
export const id="dl_fa32e6af89454f4ba3be";
export const url=new URL("../icons/radio-button.svg?v=a6c5f9951c490687b07a5fd8899d40647fbb7d672bfb6673c336e5fef3658a94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
