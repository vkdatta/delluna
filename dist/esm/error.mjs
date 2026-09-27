export const name="error";
export const id="dl_81df4a0e588be0e69ba7";
export const url=new URL("../icons/error.svg?v=a58d5978b365f3f4621b86af042798fe0544eb36862df8b829c967c4094fe2f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
