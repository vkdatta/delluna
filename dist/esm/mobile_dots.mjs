export const name="mobile_dots";
export const id="dl_9612df168663a2b4c1f3";
export const url=new URL("../icons/mobile_dots.svg?v=33dcc79770d6f30f71ab0c797f2269a50b820db33821670d257fc3f029e3bb56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
