export const name="cactus-light";
export const id="dl_7985060568be4c44abf9";
export const url=new URL("../icons/cactus-light.svg?v=fff9e1ad00476679861f72a63ba865e939bc8fe1eb656a6cbec878d9fd9c5db6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
