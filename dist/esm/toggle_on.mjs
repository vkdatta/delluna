export const name="toggle_on";
export const id="dl_430433ce31ef47e4a1a8";
export const url=new URL("../icons/T/toggle_on.svg?v=2e3f55d83284cb955fccad1c0c8b7dc550b183e4e6fcf4c49e3c36a9eb5ba551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
