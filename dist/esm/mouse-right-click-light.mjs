export const name="mouse-right-click-light";
export const id="dl_68ee0c3bbf9a49afb03b";
export const url=new URL("../icons/mouse-right-click-light.svg?v=6ba3ce4872502ee4bdc6bf9239f3efcdc524967ff7b77b6002c7c72292beaab3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
