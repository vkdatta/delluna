export const name="wifi-slash-thin";
export const id="dl_b3a1488d93f6ed0a74da";
export const url=new URL("../icons/wifi-slash-thin.svg?v=d52f318d4c02115959cc36be1eb4b7ca8c1dfc61e408c19dd3cf976f96413490",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
