export const name="squares-four-bold";
export const id="dl_bdf06134902ba87bb173";
export const url=new URL("../icons/squares-four-bold.svg?v=7610f337d3c7a1d8c4dbe2ec3b0f371792a2d83d8920490889897aeff8800c9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
