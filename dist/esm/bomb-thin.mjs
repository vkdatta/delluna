export const name="bomb-thin";
export const id="dl_a19d2be794534ccdbf6e";
export const url=new URL("../icons/bomb-thin.svg?v=cb4bcc73d26b014df67281afcfe7962fbf1bd7f9bce1e4f9c3e2250c40ecd81d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
