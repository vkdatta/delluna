export const name="lucid_2-flask-conical";
export const id="dl_8b57c461f12a46888d7d";
export const url=new URL("../icons/lucid_2-flask-conical.svg?v=ba29584f86ff5a000fc77ce8fbce8756a535002055098e5f0b44aaa7eb94c0b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
