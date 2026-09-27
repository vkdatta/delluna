export const name="person-simple-hike-light";
export const id="dl_04858c89138f4624bca8";
export const url=new URL("../icons/person-simple-hike-light.svg?v=712667e2c8ee4eaabc35ba5d60e083ed8a3c5d50e5f3fab99b94876bef9ff6e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
