export const name="lockers-duotone";
export const id="dl_56e3ba85130340419125";
export const url=new URL("../icons/lockers-duotone.svg?v=9b8d8dcbd705ac222a93ce8bea7340cb349a891f1a055582404a27481adc423f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
