export const name="phone-light";
export const id="dl_9b1048c077f74257b87d";
export const url=new URL("../icons/phone-light.svg?v=dc6594d5e3f5061851b59af74d2626643bdce8ad7fcebcf634e19c3fd08d8083",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
