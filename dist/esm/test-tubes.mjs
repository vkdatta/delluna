export const name="test-tubes";
export const id="dl_2b1a2a69c29f4ec68503";
export const url=new URL("../icons/test-tubes.svg?v=5bb29b3a14adf93dbf5d7f171fb4fc8de7b299281082105bc60549d4f234b790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
