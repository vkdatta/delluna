export const name="terminal-window";
export const id="dl_2bb43af5cc6eab1b9134";
export const url=new URL("../icons/terminal-window.svg?v=ee947aed62e5ef8184df5a7d5541e0dcf34d142687a73eeb2aff4a36c2ee7d50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
