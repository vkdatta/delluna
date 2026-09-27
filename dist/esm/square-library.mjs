export const name="square-library";
export const id="dl_4c1ef0ec2f9a45e78ebe";
export const url=new URL("../icons/square-library.svg?v=85b01fa132841e247a03dcd91fc13eb9974f6bae206426c7d4f4d1a83edee6d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
