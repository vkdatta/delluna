export const name="battery_change";
export const id="dl_53d22fffe1d64ac5afb3";
export const url=new URL("../icons/B/battery_change.svg?v=ab855cfa6c587d7f4ae95dfe838178607163bd31b805938106e3d89a1dbdc3a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
