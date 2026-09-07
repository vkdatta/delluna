export const name="screwdriver-fill";
export const id="dl_41b4604f812c439a8f80";
export const url=new URL("../icons/S/screwdriver-fill.svg?v=6dfa00abc09448d0a49d7b62323595e852b47e8c947e098fd1a88953754464b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
