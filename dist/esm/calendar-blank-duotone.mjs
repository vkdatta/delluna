export const name="calendar-blank-duotone";
export const id="dl_49a711eb13664704a860";
export const url=new URL("../icons/calendar-blank-duotone.svg?v=386cdb182525002e6df9f12b3e78af4b62d2b78795f8e1fdaceb2012b3db23c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
