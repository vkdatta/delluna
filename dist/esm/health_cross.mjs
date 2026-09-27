export const name="health_cross";
export const id="dl_27e462f3895d98adba24";
export const url=new URL("../icons/health_cross.svg?v=d3a2f63782cce45db56b45fac54cfef11296ab826ac9444dadafe702a964c98d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
