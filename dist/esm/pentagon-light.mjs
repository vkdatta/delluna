export const name="pentagon-light";
export const id="dl_782d200c2bc847c09678";
export const url=new URL("../icons/pentagon-light.svg?v=9f986b0c7572bff84c3c2ffdee955ef9142d3c5a69b57f6d11b9a5dadf4547b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
