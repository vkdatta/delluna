export const name="view_agenda";
export const id="dl_23b1bf51dae19fa28717";
export const url=new URL("../icons/view_agenda.svg?v=0701eb269ef5b8f3d70226ec9ff474fa502851d0133bf5d7f299c357e16036f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
