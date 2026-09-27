export const name="drop-simple-bold";
export const id="dl_0d3f15e4314f4970af7d";
export const url=new URL("../icons/drop-simple-bold.svg?v=4761e3dc4d68f9dbc0c6d4e7fbd66f396c7bf2a7839407ff5e4ae77927f1f44d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
