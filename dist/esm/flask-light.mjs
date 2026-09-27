export const name="flask-light";
export const id="dl_41645375d29c4204a604";
export const url=new URL("../icons/flask-light.svg?v=30cf2d4a4c179636cfa60d1ef9a2e35933c8094aae2340a24a802b9d9ceaae33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
