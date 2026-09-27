export const name="battery-warning";
export const id="dl_204f38af29bd4a23ba17";
export const url=new URL("../icons/battery-warning.svg?v=ec5a3ece0da7f785df5fa76d22128eff62e9036e1e4891835212a9e3dd282cb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
