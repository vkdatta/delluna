export const name="sticky-notes";
export const id="dl_5682c307aa9244de81b6";
export const url=new URL("../icons/sticky-notes.svg?v=4b03656507338a5f41181fddf0cc0e2b8a956270084a63e302f1b34f13d62edb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
