export const name="music-note-simple-light";
export const id="dl_9f21c030d2724281803a";
export const url=new URL("../icons/music-note-simple-light.svg?v=d3a2f49659d80893d2931b9ac541d80b95420a36f8ae08c8f9e1ad1283aa733b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
