export const name="server_person";
export const id="dl_3ce139899d559a45f08d";
export const url=new URL("../icons/server_person.svg?v=bda1bd8304eadbbf9cbcc42d171632c9ddc63376ec732c4038d5a872b0c6091a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
