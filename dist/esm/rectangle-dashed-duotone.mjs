export const name="rectangle-dashed-duotone";
export const id="dl_2159f27c6a4c499e976b";
export const url=new URL("../icons/rectangle-dashed-duotone.svg?v=34053e4b7c04c52875b49cc02185a71cc74b6b086599d30079cb9ff9dea3397f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
