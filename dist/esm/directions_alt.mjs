export const name="directions_alt";
export const id="dl_f459e143ed9b4c3c932e";
export const url=new URL("../icons/D/directions_alt.svg?v=6c0bddf66a8707a1c5610138c5fa039517178f4ba46027af730d18a14c941ce5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
