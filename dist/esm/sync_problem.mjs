export const name="sync_problem";
export const id="dl_593b98d922e04956aa57";
export const url=new URL("../icons/S/sync_problem.svg?v=0950df403796f217f0eb577c15e964b5475bc12f4d98559f4423dae3be69a44a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
