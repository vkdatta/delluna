export const name="chat_bubble";
export const id="dl_bf006319b53fec8fbdf8";
export const url=new URL("../icons/chat_bubble.svg?v=4e5aba81b71a3a8d3da41e700272a243d812c8e4d887cb9f207ada04a36ffe21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
