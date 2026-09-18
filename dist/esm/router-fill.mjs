export const name="router-fill";
export const id="dl_03bf0376a237443f8614";
export const url=new URL("../icons/router-fill.svg?v=be424f86ae58496a5273199d0b5b2d8ade1e6be13d256b4f5319548e0450e07a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
