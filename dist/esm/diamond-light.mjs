export const name="diamond-light";
export const id="dl_e93ed70d283544419939";
export const url=new URL("../icons/diamond-light.svg?v=dea4a4b7d94b06293cf324a8fb20f9b9eda7b4475c70eed3656df98840499608",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
