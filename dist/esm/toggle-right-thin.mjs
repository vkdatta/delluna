export const name="toggle-right-thin";
export const id="dl_1cfe7d6bf5e631eeb3dd";
export const url=new URL("../icons/toggle-right-thin.svg?v=4b41968993af0bea07dcc6a713b759ae51270fb93a2f0de3c600a7f83ab1b33e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
