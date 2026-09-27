export const name="tickets-plane";
export const id="dl_f9d991da56db4ae2b4e1";
export const url=new URL("../icons/tickets-plane.svg?v=3b83be79b448cf6d508c8823cd69ca7244b6ec1324858369b961714de124dcf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
