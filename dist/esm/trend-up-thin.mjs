export const name="trend-up-thin";
export const id="dl_e519cc5fc0c14738a97a";
export const url=new URL("../icons/T/trend-up-thin.svg?v=f2b16b5ccda285ae28d862849b5dca0a9ee9e61b5f8e1c0056b294f4798f3df1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
