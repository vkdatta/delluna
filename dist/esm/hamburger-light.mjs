export const name="hamburger-light";
export const id="dl_78b8513550574fa69765";
export const url=new URL("../icons/hamburger-light.svg?v=53b21e0e54339170a38f8b69f8ea71a1cca3005e4b6ffc7818f30102c8caf661",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
