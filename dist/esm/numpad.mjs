export const name="numpad";
export const id="dl_ce36f3b2b1d343e69052";
export const url=new URL("../icons/numpad.svg?v=cf19449707780227987946fb8df9fec438e1d359b5e16a884b06f1cc6cfd1a42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
