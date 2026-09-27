export const name="battery-vertical-high-thin";
export const id="dl_49af5d19c95d4508974d";
export const url=new URL("../icons/battery-vertical-high-thin.svg?v=700c8950f1776bc087bd88648a07e59513c8c355fdbeb28b0c39ad4f83f65e54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
