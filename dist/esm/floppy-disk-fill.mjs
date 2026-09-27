export const name="floppy-disk-fill";
export const id="dl_6319b542b6e945bc9976";
export const url=new URL("../icons/floppy-disk-fill.svg?v=a4cec137f48b9bd3dadba01adc66a9aaf471690f4d2102b13574a6fa85c6a5fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
