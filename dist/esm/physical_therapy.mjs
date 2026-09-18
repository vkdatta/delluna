export const name="physical_therapy";
export const id="dl_3916fa88618f43fcad5d";
export const url=new URL("../icons/P/physical_therapy.svg?v=2f0c69f51de60cb7324134e81bc5272dce4479ba18243ba3e248f9d798a1d4be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
