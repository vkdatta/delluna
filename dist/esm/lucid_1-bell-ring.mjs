export const name="lucid_1-bell-ring";
export const id="dl_f0dc68f45a844a79b537";
export const url=new URL("../icons/lucid_1-bell-ring.svg?v=8e106593c1f41ef9bec5b04c0142bc5b1a727ffc3e6292abf6217d999644912e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
