export const name="coat-hanger-light";
export const id="dl_8d9e6e2e4b6f4cf6958b";
export const url=new URL("../icons/coat-hanger-light.svg?v=82bba1426fd8b491173186f8b4c02a05c9bb6cfdf9f0983d6ae38d77edf5d874",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
