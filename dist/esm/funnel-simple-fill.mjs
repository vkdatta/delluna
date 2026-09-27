export const name="funnel-simple-fill";
export const id="dl_e5d7d85c60db4bf3be80";
export const url=new URL("../icons/funnel-simple-fill.svg?v=8ad7f2a4aef00f9eb9f62194c381c8cc1f5d1b5cc1b9d30d00d40ba38fd0c5b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
