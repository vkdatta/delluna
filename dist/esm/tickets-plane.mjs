export const name="tickets-plane";
export const id="dl_f9d991da56db4ae2b4e1";
export const url=new URL("../icons/tickets-plane.svg?v=32b8f4f307b7488de3ca4239890580e5a475f85f4facb79359a204180da1f632",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
