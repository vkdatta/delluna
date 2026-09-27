export const name="deceased-fill";
export const id="dl_0d560a8824c067d2f0de";
export const url=new URL("../icons/deceased-fill.svg?v=787ec37dc2708d65340d7de16ba69132a2b640b89e4b2f0163475cb1f81157c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
