export const name="eject-fill";
export const id="dl_779e47a208c24b9f9c3a";
export const url=new URL("../icons/eject-fill.svg?v=d019b5dd003d3b5fa0e60f3e92a6d18750f268a01ab9c63371eb02663e24b0bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
