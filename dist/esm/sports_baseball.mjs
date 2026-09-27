export const name="sports_baseball";
export const id="dl_e4c9b67bd1944a5d054a";
export const url=new URL("../icons/sports_baseball.svg?v=a4675b41f500e05d79c39f6ca3797e5f7ff4a2bcb51cf215fdc147307e6b2480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
