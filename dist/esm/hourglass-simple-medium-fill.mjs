export const name="hourglass-simple-medium-fill";
export const id="dl_14d7cc22f47f4c2fa77b";
export const url=new URL("../icons/hourglass-simple-medium-fill.svg?v=f5b405200760e34d5f4fa326e24ab859958e7064c5d8f8b8740e1d64e8326682",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
