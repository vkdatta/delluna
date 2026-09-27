export const name="history";
export const id="dl_b0bfba75eb0a706c3133";
export const url=new URL("../icons/history.svg?v=998fa8a35170525fe586687840145c8bf5e4029e657af1fb0cd5ececc805e807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
