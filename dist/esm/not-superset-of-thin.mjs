export const name="not-superset-of-thin";
export const id="dl_093e8347151e4203b731";
export const url=new URL("../icons/not-superset-of-thin.svg?v=87a54370ada5c4b2dde705596ec50df218ac14d9fbca0f91585b87ad63425042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
