export const name="arrows-out";
export const id="dl_fd6d8d9b63c549fa96c3";
export const url=new URL("../icons/arrows-out.svg?v=dc3993a01f8bb4c7cd6a6ae7674e17b439a53dbbfe4562f4cdda789bcd14545a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
