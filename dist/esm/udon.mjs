export const name="udon";
export const id="dl_7277f9f1374218f7bc28";
export const url=new URL("../icons/udon.svg?v=6954ac5265b39e22ca2a3e596ff1e7f7f8b76077ec1f71e9a994dff9f25d3bdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
