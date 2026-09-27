export const name="projector-screen-chart";
export const id="dl_802c353d90a94cb9885a";
export const url=new URL("../icons/projector-screen-chart.svg?v=1b3f010889e510c3bb5ee0589fec3ad8bd6c5ff5076ebd24769f233a44c269e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
