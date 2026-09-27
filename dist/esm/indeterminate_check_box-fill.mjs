export const name="indeterminate_check_box-fill";
export const id="dl_bc9cf11ee1c2e51ec4d2";
export const url=new URL("../icons/indeterminate_check_box-fill.svg?v=c8e6f682a66fe2a08901707313be86b12ab94178ee1d756d8080149eb49adad4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
