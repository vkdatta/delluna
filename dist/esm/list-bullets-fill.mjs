export const name="list-bullets-fill";
export const id="dl_4a1a69278169409a8da3";
export const url=new URL("../icons/list-bullets-fill.svg?v=d2e36b621377379da6d931e4d931729b368677f233610640e3d71a2662b71f15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
