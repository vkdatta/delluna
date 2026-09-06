export const name="battery-low";
export const id="dl_cb1df4eda96f4ac4b549";
export const url=new URL("../icons/battery-low.svg?v=8da96eea15cb753f1a7a60856b34ad65ef9f8ed2b6d16298c52a76005ca2ccb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
