export const name="arrows-counter-clockwise";
export const id="dl_46dd0d84d4014b85af01";
export const url=new URL("../icons/arrows-counter-clockwise.svg?v=41eed7762fc5812adadf7267222f72bf65590d57f94fb7e2f68b880e516a6d8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
