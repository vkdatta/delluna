export const name="airplane-taxiing";
export const id="dl_cee3b9313023404cbdb9";
export const url=new URL("../icons/airplane-taxiing.svg?v=1acd1f47631c262fe1631011bf61975575756fe918d2827dfddbf5e075064a57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
