export const name="warning_off-fill";
export const id="dl_2219a8cde5f7e094b933";
export const url=new URL("../icons/warning_off-fill.svg?v=b47c85d7e082e423fd962a8fd350cff97738522021d04d3c0d4426a52d877d0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
