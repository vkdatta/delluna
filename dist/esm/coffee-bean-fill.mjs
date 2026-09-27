export const name="coffee-bean-fill";
export const id="dl_e82fe1f36de24b6aa7c9";
export const url=new URL("../icons/coffee-bean-fill.svg?v=9b5ef0308b1b760fe70a80a8f4897b0aca788dd5cb1a262b8e5fd3a54cd62497",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
