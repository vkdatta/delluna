export const name="hand-waving";
export const id="dl_1bf82864c6114faf9c0d";
export const url=new URL("../icons/hand-waving.svg?v=3a89cac70c38cd3f4c5ff32ba8c4276a1aa6b35d0d3c81baa015390fdbd5a99c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
