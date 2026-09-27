export const name="faders-horizontal-thin";
export const id="dl_dbb29531bd5943f08fa6";
export const url=new URL("../icons/faders-horizontal-thin.svg?v=bf22f6da2326e88ce7acfb8e725ee2b450c68639ffb3d4b7ad5a5bbe6a5f22b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
