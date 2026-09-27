export const name="circles-four";
export const id="dl_8bc93d5cd185472b8413";
export const url=new URL("../icons/circles-four.svg?v=e6ee660b0e07ee3f83ede68ab464ee6acf0160d756cba2b8baa3c4f0561500b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
