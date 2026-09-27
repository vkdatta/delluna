export const name="subway-thin";
export const id="dl_5cc4ed8b5e31c2f340d8";
export const url=new URL("../icons/subway-thin.svg?v=d37ba63950a7bf49222e6c693f637b3327a9d452e40cd2b8d2bbca75e8a1094c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
