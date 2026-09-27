export const name="test-tube-light";
export const id="dl_6171e9dca1e095dd5e19";
export const url=new URL("../icons/test-tube-light.svg?v=7c2e0cae7781dbbf91475a041d100e60e3a30a4bd8cb6a726f9c62e747c44d15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
