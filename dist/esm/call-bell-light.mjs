export const name="call-bell-light";
export const id="dl_2d95b98b8295480a83bd";
export const url=new URL("../icons/call-bell-light.svg?v=06ba71047d2daadaa2cf14c29ab7ece23071e3828c982742c5faa15d1f287333",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
