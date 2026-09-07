export const name="tram-thin";
export const id="dl_bc59cf32fca5468a8507";
export const url=new URL("../icons/T/tram-thin.svg?v=0e8d1eda8d80ed9aa21c539bfb2125e7ae6be19eee7d11f00ea25fa02d0350ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
