export const name="event_note-fill";
export const id="dl_3e7bd803952745e2b80c";
export const url=new URL("../icons/E/event_note-fill.svg?v=867061deaa65a81a84998425a43cc7165c0a271f4591f852ecfd0105e4fcc841",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
