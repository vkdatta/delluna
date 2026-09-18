export const name="landslide";
export const id="dl_6ec66cd74ced443698ac";
export const url=new URL("../icons/L/landslide.svg?v=ce28b826ede4f9729e46deb152cc34d41bf5ea2bf60d4bed1b841d598f663a68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
